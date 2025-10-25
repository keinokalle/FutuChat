/**
 * Zod Schemas for Task Decomposition
 * 
 * Defines the expected structure for task decomposition output
 */

import { z } from 'zod'

/**
 * Schema for individual subtasks
 */
export const SubtaskSchema = z.object({
  id: z.number().describe("Unique identifier for the subtask"),
  description: z.string().describe("Description of what this subtask should analyze"),
  type: z.string().describe("Type/category of the subtask (e.g., 'economic_analysis')")
})

/**
 * Schema for the complete decomposition output
 */
export const DecompositionSchema = z.object({
  subtasks: z.array(SubtaskSchema).describe("Array of subtasks to be processed in parallel")
})

/**
 * Type inference for TypeScript/IDE support
 */
export type Subtask = z.infer<typeof SubtaskSchema>
export type Decomposition = z.infer<typeof DecompositionSchema>
