import { z } from 'zod';

export const CreateTweetSchema = z.object({
  content: z
    .string()
    .min(1, 'Tweet cannot be empty')
    .max(280, 'Tweet must be at most 280 characters'),
  parentId: z.string().uuid().optional(),
  quotedTweetId: z.string().uuid().optional(),
  mediaIds: z.array(z.string().uuid()).max(4, 'Maximum 4 media items per tweet').default([]),
  type: z.enum(['TWEET', 'REPLY', 'RETWEET', 'QUOTE']).default('TWEET'),
});

export const UpdateTweetSchema = z.object({
  content: z
    .string()
    .min(1, 'Tweet cannot be empty')
    .max(280, 'Tweet must be at most 280 characters'),
});

export const GetFeedSchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().min(1).max(50).default(20),
});

export const SearchTweetsSchema = z.object({
  query: z.string().min(1, 'Search query is required').max(100),
  cursor: z.string().optional(),
  limit: z.coerce.number().min(1).max(50).default(20),
  filter: z.enum(['LATEST', 'TOP', 'PEOPLE', 'MEDIA']).default('LATEST'),
});

export type CreateTweetDto = z.infer<typeof CreateTweetSchema>;
export type UpdateTweetDto = z.infer<typeof UpdateTweetSchema>;
export type GetFeedDto = z.infer<typeof GetFeedSchema>;
export type SearchTweetsDto = z.infer<typeof SearchTweetsSchema>;