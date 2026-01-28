import { validateResource } from '@/infrastructure/http/middlewares';
import { Router, IRouter } from 'express';
import { storiesCreateSchema, storiesUpdateSchema } from '@repo/db'
import { requireAuth } from '@/infrastructure/http/middlewares';
import { createNewStory } from './story.controller';

const routes: IRouter = Router()

// routes.get("/");

routes.post(
    "/",
    requireAuth(),
    validateResource(storiesCreateSchema),
    createNewStory
);

// routes.put(
//     "/",
//     requireAuth(),
//     validateResource(storiesUpdateSchema),
// )

export default routes