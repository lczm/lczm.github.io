import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const schema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  lastUpdateDate: z.coerce.date().optional(),
  description: z.string().optional(),
  ogImage: z.string().optional(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema,
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema,
});

const talks = defineCollection({
  loader: glob({ base: "./src/content/talks", pattern: "**/*.{md,mdx}" }),
  schema,
});

export const collections = { blog, projects, talks };
