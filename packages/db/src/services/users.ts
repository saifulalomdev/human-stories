// packages/db/src/service/users.ts

import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../schema/users";
import { UserRegistration, UserUpdate } from "../validators/users";

export async function createUser(input: UserRegistration) {
    const [user] = await db
        .insert(users)
        .values(input)
        .returning();

    return user;
}

export async function findUserByEmail(email: string) {
    const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    return user
}

export async function updateUserById(userId: string, data: UserUpdate) {
    const [updatedUser] = await db
        .update(users)
        .set(data)               
        .where(eq(users.id, userId)) 
        .returning();

    return updatedUser ?? null;
}