import { pgEnum } from 'drizzle-orm/pg-core';

export const reactionTypeEnum = pgEnum("reaction_type", ["like", "love", "insightful", "fire"]);