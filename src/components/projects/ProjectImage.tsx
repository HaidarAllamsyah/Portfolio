import type { ImgHTMLAttributes } from 'react';
import { getPlaceholderImage, resolveImageSrc } from '../../utils/media';

interface ProjectImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  title: string;
  index?: number;
  alt: string;
}

export function ProjectImage({
  src,
  title,
  index = 0,
  alt,
  ...imageProps
}: ProjectImageProps) {
  return (
    <img
      {...imageProps}
      src={resolveImageSrc(src, title, index)}
      alt={alt}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = getPlaceholderImage(title, index);
      }}
    />
  );
}
