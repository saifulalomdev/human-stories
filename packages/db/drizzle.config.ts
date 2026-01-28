import { defineConfig } from "drizzle-kit";
import { env } from '@repo/config/env/server';

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL
  }
});
