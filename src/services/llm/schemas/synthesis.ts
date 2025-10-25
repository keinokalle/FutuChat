/**
 * Zod Schemas for Synthesis Output
 * 
 * Defines the expected structure for final synthesized output
 */

import { z } from 'zod'

/**
 * Schema for final synthesis output
 */
export const SynthesisSchema = z.object({
  summary: z.string().describe("Overall summary of the analysis"),
  insights: z.array(z.string()).describe("Key insights from the analysis"),
  recommendations: z.array(z.string()).describe("Actionable recommendations"),
  sources: z.array(z.number()).describe("IDs of the contributing worker analyses")
})

/**
 * Type inference for TypeScript/IDE support
 */
export type Synthesis = z.infer<typeof SynthesisSchema>
