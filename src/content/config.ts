import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      source: z.string(),
      url: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      subtitle: z.string().optional(),
    }),
  }),
};
