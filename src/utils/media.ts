// ─── Media Utilities ──────────────────────────────────────────────────────────

import type { ProjectMedia } from '../types/project';

/**
 * Returns a placeholder image URL for a project.
 * Uses a gradient-based SVG data URL so it works offline.
 */
export function getPlaceholderImage(title: string, index = 0): string {
  const gradients = [
    ['#1a1a2e', '#16213e'],
    ['#0d1117', '#1c2033'],
    ['#111827', '#1f2937'],
    ['#0a0a0a', '#1a1a1a'],
    ['#0f172a', '#1e293b'],
  ];
  const [from, to] = gradients[index % gradients.length];
  const encoded = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#g)"/>
      <text x="400" y="230" text-anchor="middle" fill="rgba(168,255,62,0.3)" font-family="system-ui" font-size="14" font-weight="500" letter-spacing="3">PROJECT THUMBNAIL</text>
      <text x="400" y="270" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-size="22" font-weight="700">${title}</text>
      <text x="400" y="300" text-anchor="middle" fill="rgba(255,255,255,0.2)" font-family="system-ui" font-size="13">Add image to public/images/projects/</text>
    </svg>`
  );
  return `data:image/svg+xml,${encoded}`;
}

/**
 * Returns a resolved image src — falls back to placeholder if empty.
 */
export function resolveImageSrc(src: string, title: string, index = 0): string {
  if (!src || src.trim() === '') {
    return getPlaceholderImage(title, index);
  }
  return src;
}

export function extractImageAccentColor(src: string): Promise<string | null> {
  if (!src || src.trim() === '') return Promise.resolve(null);

  return new Promise((resolve) => {
    const image = new Image();
    if (/^https?:\/\//i.test(src)) image.crossOrigin = 'anonymous';

    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 32;
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) {
          resolve(null);
          return;
        }

        context.drawImage(image, 0, 0, size, size);
        const pixels = context.getImageData(0, 0, size, size).data;
        const colors = new Map<string, { red: number; green: number; blue: number; weight: number }>();

        for (let index = 0; index < pixels.length; index += 4) {
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const brightness = (red + green + blue) / 3;
          if (pixels[index + 3] < 200 || brightness < 38 || brightness > 246) continue;

          const maximum = Math.max(red, green, blue);
          const minimum = Math.min(red, green, blue);
          const saturation = maximum === 0 ? 0 : (maximum - minimum) / maximum;
          if (saturation < 0.12) continue;

          const key = [red, green, blue].map((channel) => Math.round(channel / 32)).join(',');
          const color = colors.get(key) ?? { red: 0, green: 0, blue: 0, weight: 0 };
          const sampleWeight = 0.5 + saturation;
          color.red += red * sampleWeight;
          color.green += green * sampleWeight;
          color.blue += blue * sampleWeight;
          color.weight += sampleWeight;
          colors.set(key, color);
        }

        const dominant = [...colors.values()].sort((a, b) => b.weight - a.weight)[0];
        if (!dominant) {
          resolve(null);
          return;
        }

        const hex = [dominant.red, dominant.green, dominant.blue]
          .map((channel) => Math.round(channel / dominant.weight).toString(16).padStart(2, '0'))
          .join('');
        resolve(`#${hex}`);
      } catch {
        resolve(null);
      }
    };

    image.onerror = () => resolve(null);
    image.src = src;
  });
}

/**
 * Returns the first valid image from a gallery, or the thumbnail.
 */
export function getHeroImage(thumbnail: string, gallery: ProjectMedia[] | undefined, title: string): string {
  if (gallery && gallery.length > 0) {
    const first = gallery.find((m) => m.type === 'image');
    if (first?.src) return first.src;
  }
  return resolveImageSrc(thumbnail, title);
}

/**
 * Checks if a URL is a video.
 */
export function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
}

/**
 * Extracts a YouTube embed URL from a regular YouTube URL.
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}
