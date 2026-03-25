import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const port = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/port' }),
  schema: z.object({
    title: z.string(),
    platforms: z.array(z.string()),
    contributors: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
    assets: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  port: port,
};
