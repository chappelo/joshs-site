import { defineCollection, z } from "astro:content";

const TAGS = {
  wpm: "wpm",
  study: "study",
  other: "other",
};
export const Tags = Object.values(TAGS);

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts: postsCollection,
};
