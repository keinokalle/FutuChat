/**
 * API Utilities
 * 
 * Centralized configuration for LLM API clients
 */

// TODO: Install and configure OpenAI SDK
// import OpenAI from 'openai'

interface OpenAIClient {
  message?: string
}

/**
 * Create and configure OpenAI client
 * 
 * Note: API key should be stored in environment variable
 * Create a .env file in the project root:
 * VITE_OPENAI_API_KEY=your_api_key_here
 */
export const createOpenAIClient = (): OpenAIClient => {
  // TODO: Implement with OpenAI SDK
  // const openai = new OpenAI({
  //   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  //   dangerouslyAllowBrowser: true // Only for development
  // })
  
  // return openai
  
  return {
    message: "OpenAI client not yet configured"
  }
}

/**
 * Get OpenAI API key from environment
 */
export const getApiKey = (): string | undefined => {
  return import.meta.env.VITE_OPENAI_API_KEY
}
