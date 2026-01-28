// FILE: src/app/register-routes.js
import { Express } from 'express';
import { healthHandler } from '../lib/health-handler';
import authRoutes  from '@/modules/auth';

export function registerRoutes(app: Express) {

    app.get("/health", healthHandler);
    app.use("/auth", authRoutes);
}