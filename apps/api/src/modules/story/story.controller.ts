import { sendResponse } from '@/core'
import { NextFunction, Request, Response } from 'express'
import { createStory } from './story.service'
import { StoriesCreate } from '@repo/db'

export async function createNewStory(req: Request<StoriesCreate>, res: Response, next: NextFunction) {
    try {
        const story = await createStory({ authorId: req.user.id, ...req.body })
        return sendResponse(res, 201, "Story saved successfully!", true, story)
    } catch (error) {
        next(error)
    }
}