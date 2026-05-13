import z from 'zod'

export const recordPaymentSchema = z.object({
  company: z.string().min(1, 'Company is required'),

  amount: z
    .string()
    .min(1, 'Amount is required')
    .regex(/^\d+(\.\d{1,2})?$/, 'Enter a valid amount'),

  paymentMethod: z.string().min(1, 'Payment method is required'),

  referenceId: z.string().min(1, 'Transaction reference is required'),
})

export const issueRefundSchema = z
  .object({
    refundType: z.string().min(1, 'Refund type is required'),

    refundAmount: z
      .string()
      .min(1, 'Refund amount is required')
      .regex(/^\d+(\.\d{1,2})?$/, 'Enter a valid refund amount'),

    reason: z.string().min(1, 'Reason is required'),
  })
  .refine(
    (values) => {
      const amount = Number(values.refundAmount)

      return !Number.isNaN(amount)
    },
    {
      message: 'Refund amount must be valid',
      path: ['refundAmount'],
    }
  )
