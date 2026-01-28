import { StoriesInsert } from '../validators/stories';
import { db } from '../db';
import { stories } from '../schema/stories';


export async function saveStories(input: StoriesInsert) {
    return db.insert(stories).values(input).returning()
}