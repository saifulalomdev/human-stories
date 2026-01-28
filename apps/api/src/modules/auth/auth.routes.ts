import { validateResource } from '@/infrastructure/http/middlewares';
import { Router, IRouter } from 'express';
import { insertUserSchema, loginUserSchema } from '@repo/db'
import { loginUser, registerUser } from './auth.controller';
import { requireAuth } from '@/infrastructure/http/middlewares';

const routes: IRouter = Router()

routes.get(
    "/me",
    requireAuth(),
    // authController.getProfile
)

routes.post(
    "/register",
    validateResource(insertUserSchema),
    registerUser
)

routes.post(
    "/login", 
    validateResource(loginUserSchema),
    loginUser
)

export default routes