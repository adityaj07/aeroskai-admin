import { z } from 'zod'

export const approveApplicationSchema = z
  .object({
    price: z
      .string()
      .min(1, 'Price is required')
      .regex(/^\d+(\.\d{1,2})?$/, 'Enter a valid price (up to 2 decimals)'),
    seats: z.string().min(1, 'Number of seats is required'),
    startDate: z.date({ required_error: 'Start date is required' }),
    endDate: z.date({ required_error: 'End date is required' }),
    sendBillingEmail: z.boolean(),
    foundingCompanyBadge: z.boolean(),
  })
  .refine((values) => values.endDate >= values.startDate, {
    message: 'End date must be on or after start date',
    path: ['endDate'],
  })

export const requestMoreInformationSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),

  message: z
    .string()
    .min(1, 'Message is required')
    .min(20, 'Message must be at least 20 characters'),
})

export const confirmApplicationActionSchema = z.object({
  reason: z.string().optional(),
})
