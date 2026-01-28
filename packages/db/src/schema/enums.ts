import { pgEnum } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum("role_enum", ["ADMIN", "USER"])
export const reactionTypeEnum = pgEnum("reaction_type", ["like", "love", "insightful", "fire"]);