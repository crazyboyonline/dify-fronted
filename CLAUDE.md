# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15 + React 19 chat application template** designed as a frontend client for Dify's AI chat API. The app provides real-time streaming conversations, file uploads, multi-language support, and workflow capabilities.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build
npm start

# Docker deployment
docker build . -t <repo>/webapp-conversation:latest
docker run -p 3000:3000 <repo>/webapp-conversation:latest

# Code quality
npm run lint      # Check ESLint errors
npm run fix       # Auto-fix ESLint errors
```

## Environment Configuration

Required environment variables in `.env.local`:

```env
NEXT_PUBLIC_APP_ID=          # Found in Dify app URL (e.g., /app/xxx/workflow)
NEXT_PUBLIC_APP_KEY=         # Generated on Dify "API Access" page
NEXT_PUBLIC_API_URL=         # Dify API base URL (default: https://api.dify.ai/v1)
```

Additional app configuration is in `config/index.ts`:
- `APP_INFO`: title, description, copyright, default_language, iframe embedding settings
- `isShowPrompt` / `promptTemplate`: Prompt prefix configuration
- `API_PREFIX`: API route prefix (`/api`)
- `LOCALE_COOKIE_NAME`: Cookie name for locale storage

## Architecture

### App Router Structure (Next.js 15)

- **`app/layout.tsx`**: Root layout with i18n locale resolution
- **`app/page.tsx`**: Home page (renders Main component)
- **`app/api/**`**: Server-side API route handlers (proxy to Dify API)

### Component Organization

- **`app/components/base/`**: Reusable primitives (buttons, icons, inputs, uploader, toast)
- **`app/components/chat/`**: Chat interface components
- **`app/components/workflow/`**: Workflow execution UI
- **`app/components/sidebar/`**: Conversation history sidebar
- **`app/components/welcome/`**: Welcome screen

**Convention**: Server components by default. Only add `'use client'` when necessary (state, effects, browser APIs).

### Service Layer (API Client)

- **`service/base.ts`**: Core HTTP/SSE utilities (`get`, `post`, `put`, `del`, `ssePost`)
- **`service/index.ts`**: Domain-specific API functions (use `sendChatMessage` for streaming chat)

**SSE Streaming**: Use `ssePost` with callbacks: `onData`, `onCompleted`, `onThought`, `onFile`, `onMessageEnd`, `onMessageReplace`, `onWorkflowStarted`, `onNodeStarted`, `onNodeFinished`, `onWorkflowFinished`, `onError`.

### State Management

- **Zustand**: Global state (located in `app/components/` features)
- **Immer**: Immutable state updates
- **Local state**: Component-level UI interactions

### Internationalization (i18n)

- **Server locale**: `getLocaleOnServer()` from `i18n/server.ts` (reads cookie/headers)
- **Client locale**: `getLocaleOnClient()` / `setLocaleOnClient()` from `i18n/client.ts`
- **Translation files**: `i18n/lang/**` (en, es, fr, ja, vi, zh-Hans)
- **HTML lang attribute**: Set via resolved locale in `app/layout.tsx`

### TypeScript Conventions

- `strict: true` enabled in `tsconfig.json`
- Use `@/*` path alias for absolute imports
- Avoid `any`; prefer explicit types
- Hook names prefixed with `use`, co-located in `hooks/**`

### Styling

- **Tailwind-first**: Use utility classes from `tailwind.config.js`
- **Conditional classes**: Use `classnames` or `tailwind-merge`
- **Component styles**: Prefer colocated `style.module.css` or Tailwind
- **Global styles**: `app/styles/**`
- **Markdown**: Tailwind Typography plugin for rendered markdown

### API Routes

All API handlers are server-side route handlers in `app/api/**/route.ts`:
- `app/api/chat-messages/`: Chat message endpoints
- `app/api/conversations/`: Conversation management
- `app/api/file-upload/`: File upload handlers
- `app/api/messages/`: Message endpoints

These proxy requests to Dify API to avoid exposing API keys on the client.

## Key Features

- **Streaming chat responses** via Server-Sent Events
- **File uploads** (images, documents)
- **Multi-language** support (en, es, fr, ja, vi, zh-Hans)
- **Conversation history** with sidebar navigation
- **Message feedback** system
- **Workflow support** for complex AI tasks
- **Thought streaming** for AI reasoning visibility
- **Image vision** capabilities

## Technology Stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript 5.9
- **State**: Zustand, Immer
- **UI**: Headless UI, Heroicons, RemixIcon
- **Styling**: Tailwind CSS, Tailwind Typography, Sass
- **i18n**: i18next, react-i18next
- **Markdown**: react-markdown, KaTeX math support
- **HTTP**: Axios, Server-Sent Events
- **Code Editor**: Monaco Editor
- **Quality**: ESLint, Husky (git hooks)
