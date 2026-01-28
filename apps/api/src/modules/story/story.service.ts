import { StoriesInsert, Stories, saveStories } from "@repo/db";

export async function createStory(input: StoriesInsert): Promise<Stories> {
    const [story] = await saveStories(input);
    return story
}