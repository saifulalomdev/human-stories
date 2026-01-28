import { validateResource } from '@/infrastructure/http/middlewares';
import { Router, IRouter } from 'express';
import { userLoginSchema, userRegistrationSchema } from '@repo/db'
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
    validateResource(userRegistrationSchema),
    registerUser
)

routes.post(
    "/login", 
    validateResource(userLoginSchema),
    loginUser
)

export default routes