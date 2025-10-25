# FutuChat
Prototype of an AI Agent for Finland's decision makers to empower capabilities for analysing, interpreting, and leveraging scenarios and other resources from foresight reports.

AI agents and real world course project in collaboration with Sitra.

### Tech stack:
- Frontend: React, TS, Vite, CSS
- Backend:
  - Langraph for orchestrator workflows
  - Zod for runtime validation with schemas
  - OpenAI API for all LLM calls

### What do I need?
- Integrated Development Environment
- Node.js (version 14 or higher)
- OpenAI API Key

## How to test out?
Clone and install dependencies:
   ```
   npm install
   ```
Create a .env file in the root directory with an api key:
   ```
   API_KEY=your_key
   ```

Start the web interface:
   ```
   npm run dev
   ```

Open http://localhost:5175
