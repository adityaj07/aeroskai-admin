const mockDashboardOverview = {
  stats: [
    {
      id: 'total-companies',
      title: 'Total Companies',
      value: 100,
      trend: [14, 12, 11, 16, 28, 24, 18],
    },
    {
      id: 'active-companies',
      title: 'Active Companies',
      value: 80,
      trend: [8, 9, 8, 12, 10, 11, 9],
    },
    {
      id: 'pending-applications',
      title: 'Pending Applications',
      value: 5,
      trend: [18, 10, 6, 15, 12, 20, 22],
    },
    {
      id: 'active-subscriptions',
      title: 'Active Subscriptions',
      value: 1000,
      trend: [11, 8, 6, 13, 10, 9, 15],
    },
    {
      id: 'total-users',
      title: 'Total Users',
      value: 2500,
      trend: [16, 14, 11, 24, 21, 16, 18],
    },
    {
      id: 'open-support',
      title: 'Open Support',
      value: 9,
      trend: [6, 7, 5, 10, 8, 9, 7],
    },
  ],
  revenue: {
    title: 'Revenue',
    amount: 3600,
    growth: 5.2,
    period: 'Month',
    data: [
      { day: 1, amount: 62000 },
      { day: 5, amount: 36000 },
      { day: 8, amount: 46000 },
      { day: 11, amount: 25000 },
      { day: 14, amount: 41000 },
      { day: 16, amount: 50000, highlighted: true },
      { day: 19, amount: 34000 },
      { day: 22, amount: 43000 },
      { day: 25, amount: 45000 },
      { day: 28, amount: 35000 },
      { day: 30, amount: 24000 },
    ],
  },
  actions: [
    {
      id: 'create-company-account',
      title: 'Create Company Account',
      description: 'Add a new company and assign access',
      icon: 'plus',
    },
    {
      id: 'manage-users',
      title: 'Manage Users',
      description: 'View and manage all individual users',
      icon: 'plus',
    },
    {
      id: 'review-applications',
      title: 'Review Applications',
      description: 'Approve or reject pending company applications',
      icon: 'list',
    },
    {
      id: 'support-inbox',
      title: 'Support Inbox',
      description: 'Respond to user and company support requests',
      icon: 'list',
    },
  ],
}

export const dashboardService = {
  getOverview: async () => {
    return Promise.resolve(mockDashboardOverview)
  },
}
