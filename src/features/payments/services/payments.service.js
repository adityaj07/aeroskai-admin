const companyPaymentsMockData = [
  {
    id: 'txn-843927',
    company: 'SkyJet Aviation',
    referenceId: 'TXN-843927',
    seats: 20,
    amount: '$150.00',
    paymentMethod: 'Stripe',
    status: 'Successful',
    date: 'Mar 18, 2026',
  },
  {
    id: 'txn-843932',
    company: 'Adventure Seekers',
    referenceId: 'TXN-843932',
    seats: 35,
    amount: '$300.00',
    paymentMethod: 'Bank Transfer',
    status: 'Refunded',
    date: 'Mar 23, 2026',
  },
  {
    id: 'txn-843930',
    company: 'Urban Escapes',
    referenceId: 'TXN-843930',
    seats: 87,
    amount: '$90.00',
    paymentMethod: 'Cash',
    status: 'Successful',
    date: 'Mar 21, 2026',
  },
  {
    id: 'txn-843935',
    company: 'Luxury Cruises',
    referenceId: 'TXN-843935',
    seats: 12,
    amount: '$600.00',
    paymentMethod: 'Stripe',
    status: 'Failed',
    date: 'Mar 26, 2026',
  },
  {
    id: 'txn-843928',
    company: 'OceanWave Travel',
    referenceId: 'TXN-843928',
    seats: 35,
    amount: '$250.00',
    paymentMethod: 'Cash',
    status: 'Successful',
    date: 'Mar 19, 2026',
  },
]

const individualPaymentsMockData = [
  {
    id: 'txn-user-1',
    user: '@savannah17',
    referenceId: 'TXN-843927',
    plan: 'Monthly',
    amount: '$14.99',
    paymentMethod: 'Stripe',
    status: 'Successful',
    date: 'Mar 18, 2026',
  },
  {
    id: 'txn-user-2',
    user: '@olivia_smith',
    referenceId: 'TXN-843929',
    plan: 'Annual',
    amount: '$99.99',
    paymentMethod: 'Stripe',
    status: 'Pending',
    date: 'Mar 20, 2026',
  },
  {
    id: 'txn-user-3',
    user: '@noah_williams',
    referenceId: 'TXN-843934',
    plan: 'Annual',
    amount: '$199.99',
    paymentMethod: 'Cash',
    status: 'Successful',
    date: 'Mar 25, 2026',
  },
  {
    id: 'txn-user-4',
    user: '@michael_jones',
    referenceId: 'TXN-843930',
    plan: 'Monthly',
    amount: '$19.99',
    paymentMethod: 'Stripe',
    status: 'Failed',
    date: 'Mar 21, 2026',
  },
  {
    id: 'txn-user-5',
    user: '@isabella99',
    referenceId: 'TXN-843933',
    plan: 'Quarterly',
    amount: '$39.99',
    paymentMethod: 'Stripe',
    status: 'Successful',
    date: 'Mar 24, 2026',
  },
]

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null
  return status
}

export const paymentsService = {
  getCompanies: async ({ status = 'All', search = '', duration = 'Last 30 days' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)

    const normalizedSearch = search.trim().toLowerCase()

    const filtered = companyPaymentsMockData.filter((payment) => {
      const matchesStatus = normalizedStatus ? payment.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? [payment.company, payment.referenceId, payment.paymentMethod].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: companyPaymentsMockData.length,
        visible: filtered.length,
        duration,
      },
    })
  },

  getIndividuals: async ({ status = 'All', search = '', duration = 'Last 30 days' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)

    const normalizedSearch = search.trim().toLowerCase()

    const filtered = individualPaymentsMockData.filter((payment) => {
      const matchesStatus = normalizedStatus ? payment.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? [payment.user, payment.referenceId, payment.paymentMethod].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: individualPaymentsMockData.length,
        visible: filtered.length,
        duration,
      },
    })
  },

  getStats: async () => {
    return Promise.resolve({
      totalRevenue: '$12,430',
      activeSubscriptionsRevenue: '$8,200',
      refunds: '$320',
      failedPayments: 12,
    })
  },
}
