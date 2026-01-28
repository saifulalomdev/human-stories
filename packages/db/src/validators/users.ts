// packages/db/src/validators/users.ts

import {
    createSelectSchema
} from 'drizzle-zod';
import { z } from 'zod';
import { users } from '../schema/users';
import { roleEnum } from '../schema/enums';

const NAME_LENGTH = 3
const PASSWORD_LENGTH = 10;

const roleSchema = createSelectSchema(roleEnum);

export const selectUserSchema = createSelectSchema(users, {
    name: (schema) => schema.min(NAME_LENGTH, `Name must be at least ${NAME_LENGTH} letter`),
    password: (schema) => schema.min(PASSWORD_LENGTH, `Password must be at least ${PASSWORD_LENGTH} letter`),
    email: () => z.email(),
    role: roleSchema
});

export const userProfileSchema = selectUserSchema.omit({
    createdAt: true,
    updatedAt: true,
    id: true,
});

export const authUserSchema = selectUserSchema.pick({
    id: true,
    name: true,
    email: true,
    role: true,
});

export const insertUserSchema = userProfileSchema
    .omit({ role: true, isVerified: true });

export const loginUserSchema = insertUserSchema
    .omit({ name: true });

export const updateUserSchema = userProfileSchema
    .partial();

export type User = z.infer<typeof selectUserSchema>;

export type InsertUser = z.infer<typeof insertUserSchema>;

export type LoginUser = z.infer<typeof loginUserSchema>;

export type UpdateUser = z.infer<typeof updateUserSchema>;

export type AuthUser = z.infer<typeof authUserSchema>;


export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type AuthData = Prettify<{
    token: {
        accessToken: string;
        refreshToken: string;
    },
    user: AuthUser;
}>;