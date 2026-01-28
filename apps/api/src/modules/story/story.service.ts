import { StoriesInsert, Stories, saveStories, StoriesUpdate, updateStory, deleteStory } from "@repo/db";

export async function createStory(input: StoriesInsert): Promise<Stories> {
    return await saveStories(input);
}

export async function updateStoryByAuthorId(authorId: string, storyId: string, input: StoriesUpdate): Promise<Stories> {
    return await updateStory(storyId, authorId, input);
}

export async function deleteStoryByStoryAndAuthorIds(authorId: string, storyId: string): Promise<Stories> {
    return await deleteStory(storyId, authorId);
}