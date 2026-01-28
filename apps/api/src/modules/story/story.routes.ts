import { Router, IRouter } from 'express';
import { requireAuth } from '@/infrastructure/http/middlewares';
import { createNewStory, updateStory , deleteStory } from './story.controller';
import { idParams, storiesCreateSchema, storiesUpdateSchema } from '@repo/db'
import { validateResource } from '@/infrastructure/http/middlewares';

const routes: IRouter = Router()

// routes.get("/");

routes.post(
    "/",
    requireAuth(),
    validateResource(storiesCreateSchema),
    createNewStory
);

routes.put(
    "/:id",
    requireAuth(),
    validateResource(idParams , "params"),
    validateResource(storiesUpdateSchema),
    updateStory
)

routes.delete(
    "/:id",
    requireAuth(),
    deleteStory
)

export default routes