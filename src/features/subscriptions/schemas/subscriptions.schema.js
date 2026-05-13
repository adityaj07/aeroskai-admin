import z from 'zod'

export const sendInvoiceEmailSchema = z.object({
  type: z.string().min(1, 'Email type is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(20, 'Message must be at least 20 characters'),
})

export const sendRenewalReminderSchema = z.object({
  expiryDate: z.date({
    required_error: 'Expiry date is required',
  }),

  message: z
    .string()
    .min(1, 'Message is required')
    .min(20, 'Message must be at least 20 characters'),
})
