import { useState, useCallback } from 'react'
import { processMessage, OrchestratorResult } from '../services/llm/orchestrator'

/**
 * Custom hook for orchestrator interactions
 * 
 * Manages orchestration state and provides easy-to-use methods
 */
export const useOrchestrator = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * Process a message through the orchestration pipeline
   */
  const process = useCallback(async (message: string): Promise<OrchestratorResult> => {
    setIsProcessing(true)
    setError(null)

    try {
      const result = await processMessage(message)
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError(errorMessage)
      throw err
    } finally {
      setIsProcessing(false)
    }
  }, [])

  return {
    process,
    isProcessing,
    error
  }
}
