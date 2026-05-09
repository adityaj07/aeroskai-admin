const companySubscriptionsMockData = [
  {
    id: 'flight-tech-solutions',
    companyName: 'Flight Tech Solutions',
    seats: 20,
    startDate: 'Jan 1, 2025',
    endDate: 'Dec 31, 2025',
    status: 'Active',
  },
  {
    id: 'skyhigh-ventures',
    companyName: 'Skyhigh Ventures',
    seats: 45,
    startDate: 'Feb 1, 2025',
    endDate: 'Jul 31, 2025',
    status: 'Active',
  },
  {
    id: 'cloud-nine-travel',
    companyName: 'Cloud Nine Travel',
    seats: 90,
    startDate: 'Feb 1, 2025',
    endDate: 'May 31, 2025',
    status: 'Expiring Soon',
  },
  {
    id: 'propeller-innovations',
    companyName: 'Propeller Innovations',
    seats: 32,
    startDate: 'Mar 1, 2025',
    endDate: 'Mar 31, 2025',
    status: 'Free Access',
  },
  {
    id: 'nimbus-airlines',
    companyName: 'Nimbus Airlines',
    seats: 45,
    startDate: 'Feb 1, 2025',
    endDate: 'Jul 31, 2025',
    status: 'Expired',
  },
]

const individualSubscriptionsMockData = [
  {
    id: 'emily78',
    username: '@emily78',
    email: 'emily78@mail.com',
    plan: 'Monthly',
    nextRenewal: 'Apr 20, 2024',
    status: 'Expiring Soon',
  },
  {
    id: 'jacob77',
    username: '@jacob77',
    email: 'jacob77@mail.com',
    plan: 'Monthly',
    nextRenewal: 'Nov 18, 2024',
    status: 'Active',
  },
  {
    id: 'michael56',
    username: '@michael56',
    email: 'michael56@mail.com',
    plan: 'Yearly',
    nextRenewal: 'Mar 10, 2025',
    status: 'Active',
  },
  {
    id: 'isabella08',
    username: '@isabella08',
    email: 'isabella08@mail.com',
    plan: 'Monthly',
    nextRenewal: 'Oct 25, 2024',
    status: 'Expired',
  },
]

const companySubscriptionDetailsMock = {
  'flight-tech-solutions': {
    id: 'flight-tech-solutions',
    companyId: 'flight-tech-solutions',
    companyName: 'Flight Tech Solutions',
    username: '@flighttech',
    status: 'Active',
    foundingCompany: true,

    subscription: {
      seats: 20,
      inUse: 8,
      startDate: 'Jan 1, 2025',
      endDate: 'Dec 31, 2025',
      startDateInput: '01/01/2025',
      endDateInput: '31/12/2025',
      paymentReference: 'INV-2025-0048 / PO-8812',
      status: 'Active',
    },

    renewalReminder: {
      to: 'contact@flighttech.com',
      subject: 'Your Aeroskai Subscription is Expiring Soon',
      expiryDate: '31/05/2026',
      message:
        'Dear Flight Tech Solutions,\n\nThis is a friendly reminder that your Aeroskai subscription is due to expire on Dec 31, 2025.\n\nOnce your subscription expires, your organization access will be restricted and team members will see an account notice.\n\nTo renew your subscription, please reach out to us directly.\nEmail: billing@aeroskai.com\n\nBest regards,\nAeroskai Team',
    },

    invoiceEmail: {
      to: 'contact@flighttech.com',
      subject: 'Your Aeroskai Subscription Details',
      message:
        'Dear Flight Tech Solutions,\n\nYour current subscription details are as follows:\n\nPlan: Pro (20 seats)\nDuration: Jan 1, 2025 - Dec 31, 2025\nPricing: [Admin to complete]\nPayment Instructions: [Admin to complete]\n\nPlease contact billing@aeroskai.com for questions.\n\nBest regards,\nAeroskai Team',
    },

    renewalWorkflow: [
      {
        title: 'Send Renewal Reminder',
        description: 'Email sent to company 30 days before expiry',
        state: 'complete',
        note: 'Sent Mar 1, 2025',
      },
      {
        title: 'Send Invoice / PO',
        description: 'Invoice sent externally - outside the app',
        state: 'complete',
        note: 'Invoice #INV-2026-0048 sent Mar 5, 2025',
      },
      {
        title: 'Await External Payment',
        description: 'Company completes payment via bank transfer / PO - no in-app payment',
        state: 'pending',
        cta: 'Mark Payment Confirmed',
      },
      {
        title: 'Update Subscription Dates',
        description: 'Admin updates start/end dates below to restore access',
        state: 'inactive',
      },
    ],
  },
}

const individualSubscriptionDetailsMock = {
  emily78: {
    id: 'emily78',
    username: '@emily78',
    email: 'emily78@mail.com',
    status: 'Active',

    currentSubscription: {
      plan: 'Monthly',
      startDate: 'Mar 1, 2026',
      nextBillingDate: 'Apr 1, 2026',
      amount: '$7.37 / month',
      status: 'Active',
    },

    billingSummary: {
      totalPaid: '$120.00',
      lastPayment: 'Mar 1, 2026',
      paymentsCount: 12,
    },

    billingHistory: [
      {
        date: 'Oct 25, 2026',
        plan: 'Monthly',
        amount: '$7.37',
        method: 'Stripe',
        transactionId: 'TXN-843934',
        status: 'Successful',
      },
      {
        date: 'Apr 15, 2026',
        plan: 'Monthly',
        amount: '$7.37',
        method: 'Stripe',
        transactionId: 'TXN-843928',
        status: 'Refunded',
      },
      {
        date: 'May 20, 2026',
        plan: 'Monthly',
        amount: '$7.37',
        method: 'Stripe',
        transactionId: 'TXN-843929',
        status: 'Failed',
      },
      {
        date: 'Mar 18, 2026',
        plan: 'Monthly',
        amount: '$7.37',
        method: 'Cash',
        transactionId: 'TXN-843927',
        status: 'Successful',
      },
    ],
  },
}

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null
  return status
}

export const subscriptionsService = {
  getCompanies: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)
    const normalizedSearch = search.trim().toLowerCase()

    const filtered = companySubscriptionsMockData.filter((company) => {
      const matchesStatus = normalizedStatus ? company.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? company.companyName.toLowerCase().includes(normalizedSearch)
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: companySubscriptionsMockData.length,
        visible: filtered.length,
      },
    })
  },

  getIndividuals: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)
    const normalizedSearch = search.trim().toLowerCase()

    const filtered = individualSubscriptionsMockData.filter((user) => {
      const matchesStatus = normalizedStatus ? user.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? [user.username, user.email].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: individualSubscriptionsMockData.length,
        visible: filtered.length,
      },
    })
  },

  getCompanyById: async (id) => {
    return Promise.resolve(
      companySubscriptionDetailsMock[id] ?? companySubscriptionDetailsMock['flight-tech-solutions']
    )
  },

  getIndividualById: async (id) => {
    return Promise.resolve(
      individualSubscriptionDetailsMock[id] ?? individualSubscriptionDetailsMock.emily78
    )
  },
}
