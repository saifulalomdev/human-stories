import { NextFunction, Request, Response } from 'express';
import {
    AuthData,
    LoginUser,
    type InsertUser
} from '@repo/db';
import { sendResponse } from '@/core';
import { signIn, signUp } from './auth.service';

/**
 * Controller to handle new user registration.
 * Path: POST /auth/register
 */
export async function registerUser(
    req: Request<object, object, InsertUser>,
    res: Response,
    next: NextFunction
) {
    try {
        const newUser = await signUp(req.body)
        return sendResponse(res, 201, "User registered successfully", true, newUser);
    } catch (error) {
        next(error)
    }
}

/**
 * Controller to handle new user registration.
 * Path: POST /auth/login
 */
export async function loginUser(
    req: Request<object, object, LoginUser>,
    res: Response,
    next: NextFunction
) {
    try {
        const userInfoAndcredentials = await signIn(req.body);
        return sendResponse(res, 201, "User login successfully", true, userInfoAndcredentials);
    } catch (error) {
        next(error)
    }
}