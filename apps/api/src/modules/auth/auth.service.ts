import {
    findUserByEmail,
    createUser,
    type UserRegistration,
    updateUserById,
    UserLogin,
    UserPublic,
    LogInResponse
} from '@repo/db';
import { AppError } from '@/core';
import { generateTokens, hashPassword, verifyPassword } from './auth.utils';

/**
 * Service to handle new user registration.
 * Path: POST /auth/register
 */
export async function signUp(data: UserRegistration) {
    const { email, password, name } = data;

    // 1. Check for existing user
    const existingUser = await findUserByEmail(email);

    if (existingUser?.isVerified) {
        throw new AppError("Email is already registered and verified", 409);
    }

    // 2. Prepare data (Security)
    const securePassword = await hashPassword(password);

    // 3. Persist to database
    // If the user existed but wasn't verified, you might want to update instead of create,
    // but for now, we'll assume a fresh creation.
    const newUser = await createUser({
        email,
        name,
        password: securePassword
    });

    //  3. verified user
    // TO-DO: add email verification later
    const verifiedUser = await updateUserById(newUser.id, { isVerified: true })

    // 4. Clean sensitive data before sending to client
    const { password: _, ...userWithoutPassword } = verifiedUser;

    return userWithoutPassword;
}


export async function signIn(data: UserLogin): Promise<LogInResponse> {
    const { email, password } = data;

    // 1. Check for existing user
    const existingUser = await findUserByEmail(email);

    // 2. check user exists
    if (!existingUser) {
        throw new AppError("Email is not registered.", 404);
    }

    // 2.5 check user is verified
    if (!existingUser.isVerified) {
        throw new AppError("Please verify your email before logging in.", 401);
    }

    // 3.check password
    const matchPassword = await verifyPassword(password, existingUser.password);

    if (!matchPassword) {
        throw new AppError("Wrong credentials.", 403);
    }

    // 4. Auth user
    const publicUser: UserPublic = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
    };

    // 5. genarate accesstoken and refreshtoken
    const tokens = generateTokens(publicUser);

    // 6. prepare client data.
    const authCredentials: LogInResponse= {
        tokens,
        user: publicUser
    };

    return authCredentials;
}