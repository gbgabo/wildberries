import { fontData, experimental_getFontFileURL } from 'astro:assets';

export const importImage = (path: string) => {
  const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/ports/*.{jpeg,jpg,png,gif}');
  if (!images[path]) throw new Error(`"${path}" does not exist in glob: "src/assets/images/*.{jpeg,jpg,png,gif}"`);

  return images[path]();
};

const font = fontData['--font-jetbrains-mono'].find(
  (font) => font.weight == '500' && font.src.some((f) => f.format === 'truetype')
);

if (font === undefined) {
  throw new Error('Cannot find the font path.');
}

export const getFontSrc = async (url: URL) => {
  const fontPath = experimental_getFontFileURL(font.src[1]?.url, url);
  const fontSrc = await fetch(fontPath).then((res) => res.arrayBuffer());
  return fontSrc;
};
