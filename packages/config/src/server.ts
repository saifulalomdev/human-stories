// packages/config/src/server.ts;
if (typeof window !== "undefined") {
  throw new Error(
    "💀 SECURITY ALERT: You are importing a server-side configuration file on the client!"
  );
}

import { config } from 'dotenv';
import { join } from 'node:path';
import z from 'zod';

config({ path: join(process.cwd(), "../../.env") });

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.coerce.number().default(5000),
    JWT_REFRESH_SECRET: z.string(),
    JWT_ACCESS_SECRET: z.string(),
    JWT_ACCESS_SECRET_EXIRES_IN: z.string().optional(),
    JWT_REFRESH_SECRET_EXIRES_IN: z.string().optional(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    console.error("❌ Invalid Environment Variables:", _env.error.format());
    process.exit(1); 
}

export const env = _env.data;