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
