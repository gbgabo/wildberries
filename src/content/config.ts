import { z, defineCollection } from 'astro:content';

const port = defineCollection({
  schema: z.object({
    title: z.string(),
    platforms: z.array(z.string()),
    images: z.array(z.string()).optional(),
    assets: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  port: port,
};
