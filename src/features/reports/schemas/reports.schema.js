import { z } from 'zod'

export const editContentSchema = z.object({
  content: z.string().min(1, 'Content is required'),
  reason: z.string().min(1, 'Reason for edit is required'),
  explanation: z.string().optional(),
})

export const resolveReportSchema = z.object({
  resolution: z.string().min(1, 'Resolution is required'),
  actionTaken: z.string().min(1, 'Action taken is required'),
  notes: z.string().optional(),
})
