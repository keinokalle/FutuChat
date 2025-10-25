/**
 * Zod Schemas for Worker Output
 * 
 * Defines the expected structure for individual worker analysis
 */

import { z } from 'zod'

/**
 * Schema for worker analysis output
 */
export const WorkerResultSchema = z.object({
  subtaskId: z.number().describe("ID of the subtask this result corresponds to"),
  analysis: z.string().describe("Main analysis text for this subtask"),
  keyPoints: z.array(z.string()).describe("Key points or bullet items"),
  confidence: z.number().min(0).max(1).describe("Confidence score for this analysis")
})

/**
 * Type inference for TypeScript/IDE support
 */
export type WorkerResult = z.infer<typeof WorkerResultSchema>
