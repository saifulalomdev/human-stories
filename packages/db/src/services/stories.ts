import { StoriesInsert, StoriesUpdate } from '../validators/stories';
import { db } from '../db';
import { stories } from '../schema/stories';
import { and, eq } from 'drizzle-orm';


export async function saveStories(input: StoriesInsert) {
    const [story] = await db.insert(stories).values(input).returning()
    return story
}

export async function updateStory(
    storyId: string,
    authorId: string,
    input: StoriesUpdate
) {
    const [updatedStory] = await db
        .update(stories)
        .set(input)
        .where(and(eq(stories.id, storyId), eq(stories.authorId, authorId)))
        .returning();

    return updatedStory;
}

export async function deleteStory(
    storyId: string,
    authorId: string,
) {
    const [deletedStory] = await db
        .delete(stories)
        .where(and(eq(stories.id, storyId), eq(stories.authorId, authorId)))
        .returning();

    return deletedStory;
}