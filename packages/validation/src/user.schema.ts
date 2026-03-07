import { z } from 'zod';

export const UpdateProfileSchema = z.object({
  displayName: z
    .string()
    .min(1, 'Display name is required')
    .max(50, 'Display name must be at most 50 characters')
    .optional(),
  bio: z.string().max(160, 'Bio must be at most 160 characters').optional(),
  location: z.string().max(30, 'Location must be at most 30 characters').optional(),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  avatarMediaId: z.string().uuid().optional(),
  bannerMediaId: z.string().uuid().optional(),
});

export const GetUserProfileSchema = z.object({
  username: z
    .string()
    .min(1)
    .regex(/^[a-zA-Z0-9_]+$/),
});

export const GetFollowersSchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;
export type GetUserProfileDto = z.infer<typeof GetUserProfileSchema>;
export type GetFollowersDto = z.infer<typeof GetFollowersSchema>;
