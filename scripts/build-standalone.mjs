import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist');
const publicDirectory = join(process.cwd(), 'public');
const scriptPath = join(outputDirectory, 'portfolio.js');
const stylesheetPath = join(outputDirectory, 'portfolio.css');
const htmlPath = join(outputDirectory, 'portfolio.html');
const pagesHtmlPath = join(process.cwd(), 'index.html');

const [bundledScript, bundledStylesheet] = await Promise.all([
  readFile(scriptPath, 'utf8'),
  readFile(stylesheetPath, 'utf8'),
]);

async function getPublicAssetPaths(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedPaths = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = join(directory, entry.name);
      return entry.isDirectory()
        ? getPublicAssetPaths(entryPath)
        : [entryPath];
    })
  );
  return nestedPaths.flat();
}

const publicAssetPaths = await getPublicAssetPaths(publicDirectory);
const rebasePublicAssetUrls = (content, publicPrefix) =>
  publicAssetPaths.reduce((result, assetPath) => {
    const publicPath = `/${relative(publicDirectory, assetPath).split(sep).join('/')}`;
    return result.replaceAll(publicPath, `${publicPrefix}${publicPath}`);
  }, content);

const createHtml = (publicPrefix) => {
  const script = rebasePublicAssetUrls(bundledScript, publicPrefix);
  const stylesheet = rebasePublicAssetUrls(bundledStylesheet, publicPrefix);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio of Haidar Allamsyah, a 3D Artist / 3D Generalist exploring immersive digital experiences." />
    <meta name="theme-color" content="#0a0a0a" />
    <title>Haidar Allamsyah — 3D Artist / 3D Generalist</title>
    <style>${stylesheet}</style>
  </head>
  <body>
    <div id="root"></div>
    <script>${script}</script>
  </body>
</html>
`;
};

await Promise.all([
  writeFile(htmlPath, createHtml('.'), 'utf8'),
  writeFile(pagesHtmlPath, createHtml('./public'), 'utf8'),
]);
await Promise.all([rm(scriptPath), rm(stylesheetPath)]);
console.log(`Created ${htmlPath} and ${pagesHtmlPath}`);
