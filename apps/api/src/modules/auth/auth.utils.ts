import { env } from '@repo/config/env/server'
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import { AuthUser } from '@repo/db'

const SALT_ROUND = 10;
const ACCESS_TOKEN_SECRET = env.JWT_ACCESS_SECRET;
const REFRESH_TOKEN_SECRET = env.JWT_REFRESH_SECRET;
const ACCESS_TOKEN_EXIRES_IN = env.JWT_ACCESS_SECRET_EXIRES_IN || "10m"; // Short life for security
const REFRESH_TOKEN_EXIRES_IN = env.JWT_REFRESH_SECRET_EXIRES_IN || "15d";

export type DecodedPayload = AuthUser & { iat: number; exp: number };

export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUND);
};

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
};

// Access and Refresh token genarator
export const generateTokens = (payload: AuthUser) => {
    const accessToken = JWT.sign(payload, ACCESS_TOKEN_SECRET, {
        expiresIn: ACCESS_TOKEN_EXIRES_IN, 
    });

    const refreshToken = JWT.sign(payload, REFRESH_TOKEN_SECRET, {
        expiresIn: REFRESH_TOKEN_EXIRES_IN,
    });

    return { accessToken, refreshToken };
};

export const verifyAccessToken = (token: string) => {
    try {
        return JWT.verify(token, ACCESS_TOKEN_SECRET) as DecodedPayload;
    } catch (error) {
        return null;
    }
};
