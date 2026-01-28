# HumanStories.app

### *Real Stories. Real People. Zero-Sync Architecture.*

**HumanStories** is a cross-platform storytelling ecosystem designed to reclaim digital intimacy in an age of AI-generated noise. Built with a "Human-First" philosophy and a "Senior-First" technical architecture.

---

## 📑 Table of Contents

1. [The "Why": Mission & Humanity](https://www.google.com/search?q=%23-the-why-mission--humanity)
2. [The Problem: The BazarBhai Lessons](https://www.google.com/search?q=%23-the-problem-the-bazarbhai-lessons)
3. [The Solution: Unified Architecture](https://www.google.com/search?q=%23-the-solution-unified-architecture)
4. [Technical Stack](https://www.google.com/search?q=%23-technical-stack)
5. [System Design](https://www.google.com/search?q=%23-system-design)
6. [Installation & Setup](https://www.google.com/search?q=%23-installation--setup)
7. [Roadmap & Future](https://www.google.com/search?q=%23-roadmap--future)

---

## 🌍 The "Why": Mission & Humanity

In 2026, the internet is flooded. AI can write code, AI can write blogs, but AI cannot live a life. **HumanStories** exists to provide a dedicated space for raw, authentic human experiences.

We believe that:

* **Authenticity is a Metric:** Engagement isn't just a number; it’s a human reaction to a shared truth.
* **Engineering serves People:** Technology should be invisible. It should work so perfectly that the user only feels the connection, not the code.

---

## ⚠️ The Problem: The BazarBhai Lessons

Before HumanStories, I built **BazarBhai**, a multi-vendor startup. While the business logic was sound, the technical execution taught me a hard lesson. I managed four disconnected repositories:

* **The Issue:** A change in the Backend schema would silently break the Mobile app.
* **The Result:** "Type-Drift"—hours wasted on manual synchronization and debugging production crashes.
* **The Realization:** To build a platform for humanity, the infrastructure must be **physically incapable of being out of sync.**

---

## 🚀 The Solution: Unified Architecture

HumanStories uses a **pnpm Monorepo** strategy. By centralizing our "Source of Truth" into shared packages, we eliminated the friction of cross-platform development.

* **Single Source of Truth:** One Zod schema defines a `Story`. That schema is used by the **API** for validation, the **Web** for forms, and the **Mobile** app for types.
* **Resilience:** If the database changes, the entire project (Web/Mobile/API) shows a red line in TypeScript immediately. We catch bugs at compile-time, not in the user's hand.

---

## 🛠 Technical Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Monorepo** | `pnpm` Workspaces | Dependency management & shared packages |
| **Backend** | `Node.js` + `Express` | High-performance, modular API |
| **Database** | `PostgreSQL` + `Drizzle ORM` | Type-safe relational data mapping |
| **Validation** | `Zod` | End-to-end runtime type safety |
| **Frontend** | `Next.js` (Web) | SEO-optimized story discovery |
| **Mobile** | `React Native` (Expo) | Native experience for storytellers |
| **Security** | `JWT` + `bcrypt` | Secure, stateless human authentication |

---

## 🏛 System Design

The project follows **Clean Architecture** principles to separate concerns:

```text
├── apps
│   ├── api         # Express server with Modular architecture (Auth, Story, Reactions)
│   ├── web         # Next.js 15+ (App Router)
│   └── mobile      # React Native / Expo
└── packages
    ├── db          # Drizzle Schemas, Migrations, and Seeders
    ├── config      # Shared ESLint, TSConfig, and Environment variables
    └── ui          # Shared React components for Web/Mobile (Optional)

```

---

## ⚙️ Installation & Setup

Follow these steps to get the entire ecosystem running locally.

### 1. Prerequisites

* Node.js (v20+)
* pnpm (v9+)
* PostgreSQL (Local or Neon/Supabase)

### 2. Clone and Install

```bash
git clone https://github.com/yourusername/humanstories.git
cd humanstories
pnpm install

```

### 3. Environment Setup

Create a `.env` file in `packages/config` and `apps/api`:

```env
DATABASE_URL=postgres://user:password@localhost:5432/humanstories
JWT_SECRET=your_super_secret_key
PORT=5000

```

### 4. Database Migration

```bash
# Push the schema to your database
pnpm --filter @repo/db db:push

```

### 5. Start Development

Run all apps (API, Web, Mobile) simultaneously with one command:

```bash
pnpm dev

```

---

## 🗺 Roadmap & Future

* [ ] **Global Search:** Fuzzy search for stories using PostgreSQL full-text search.
* [ ] **Audio Stories:** Allowing users to record their voice directly into the app.
* [ ] **Human Verification:** Integrating "Proof of Personhood" to ensure zero bot content.

---

### **Final Word**

This project is proof that a developer from Bangladesh can build world-class systems. I took the "garbage" of my past mistakes and refined it into a "killer" project. It’s not just an app; it’s an architectural statement.
