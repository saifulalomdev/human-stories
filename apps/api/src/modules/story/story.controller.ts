import { sendResponse } from '@/core'
import { NextFunction, Request, Response } from 'express'
import { createStory, deleteStoryByStoryAndAuthorIds, updateStoryByAuthorId } from './story.service'
import { StoriesCreate, StoriesUpdate } from '@repo/db'

export async function createNewStory(req: Request<StoriesCreate>, res: Response, next: NextFunction) {
    try {
        const story = await createStory({ authorId: req.user.id, ...req.body })
        return sendResponse(res, 201, "Story saved successfully!", true, story)
    } catch (error) {
        next(error)
    }
}

export async function updateStory(req: Request<{ id: string }, {}, StoriesCreate, {}>, res: Response, next: NextFunction) {
    try {
        const storyId = req.params.id;
        const story = await updateStoryByAuthorId(req.user.id, storyId, req.body)
        return sendResponse(res, 200, "Story updated successfully!", true, story)
    } catch (error) {
        next(error)
    }
}

export async function deleteStory(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const storyId = req.params.id;
        const story = await deleteStoryByStoryAndAuthorIds(req.user.id, storyId)
        return sendResponse(res, 200, "Story deleted successfully!", true, story)
    } catch (error) {
        next(error)
    }
}