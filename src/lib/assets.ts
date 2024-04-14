export const importImage = (path: string) => {
  const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/ports/*.{jpeg,jpg,png,gif}');
  if (!images[path]) throw new Error(`"${path}" does not exist in glob: "src/assets/images/*.{jpeg,jpg,png,gif}"`);

  return images[path]();
};
