import { z } from 'zod'

export const createCompanySchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  businessWebsite: z.string().min(1, 'Business website is required'),
  industry: z.string().min(1, 'Industry is required'),
  companySize: z.string().min(1, 'Company size is required'),

  username: z.string().min(1, 'Username is required'),
  fullName: z.string().min(1, 'Full name is required'),
  roleInCompany: z.string().min(1, 'Role in company is required'),
  workEmail: z.string().min(1, 'Work email is required').email('Enter a valid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  aboutBusiness: z.string().min(1, 'Tell us about your business is required'),

  price: z.string().min(1, 'Price is required'),
  numberOfSeats: z.string().min(1, 'Number of seats is required'),
  subscriptionStartDate: z.date({ required_error: 'Subscription start date is required' }),
  subscriptionEndDate: z.date({ required_error: 'Subscription end date is required' }),

  markFoundingCompany: z.boolean().optional(),
  grantFreeAccess: z.boolean().optional(),
})

export const sendSubscriptionEmailSchema = z.object({
  type: z.string().min(1, 'Email type is required'),

  subject: z.string().min(1, 'Subject is required'),

  message: z
    .string()
    .min(1, 'Message is required')
    .min(20, 'Message must be at least 20 characters'),
})

export const sendNormalEmailSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),

  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters'),
})

export const manageSubscriptionSchema = z
  .object({
    price: z
      .string()
      .min(1, 'Price is required')
      .regex(/^\d+(\.\d{1,2})?$/, 'Enter a valid price (up to 2 decimals)'),

    seats: z.string().min(1, 'Number of seats is required').regex(/^\d+$/, 'Enter a valid seat count'),

    startDate: z.date({
      required_error: 'Start date is required',
    }),

    endDate: z.date({
      required_error: 'End date is required',
    }),
  })
  .refine((values) => values.endDate >= values.startDate, {
    message: 'End date must be on or after start date',
    path: ['endDate'],
  })
