const companiesMockData = [
  {
    id: 'skyjet-aviation',
    company: 'SkyJet Aviation',
    logoAlt: 'SkyJet Aviation logo',
    username: '@skyjet',
    email: 'contact@skyjet.com',
    totalEmployees: 20,
    payment: 'Pending',
    status: 'Active',
    subscriptionExpiry: 'Dec 31, 2026',
  },
  {
    id: 'aerowave-airlines',
    company: 'AeroWave Airlines',
    logoAlt: 'AeroWave Airlines logo',
    username: '@aerowave',
    email: 'info@aerowave.com',
    totalEmployees: 10,
    payment: 'Pending',
    status: 'Active',
    subscriptionExpiry: 'Jan 15, 2025',
  },
  {
    id: 'bluesky-charter',
    company: 'BlueSky Charter',
    logoAlt: 'BlueSky Charter logo',
    username: '@bluesky',
    email: 'support@bluesky.com',
    totalEmployees: 15,
    payment: 'Paid',
    status: 'Inactive',
    subscriptionExpiry: 'Feb 28, 2024',
  },
  {
    id: 'skylight-services',
    company: 'Skylight Services',
    logoAlt: 'Skylight Services logo',
    username: '@skylight',
    email: 'contact@skylight.com',
    totalEmployees: 18,
    payment: 'Paid',
    status: 'Access Restricted',
    subscriptionExpiry: 'Apr 22, 2025',
  },
]

const companyDetailsMock = {
  'skyjet-aviation': {
    id: 'skyjet-aviation',
    company: 'SkyJet Aviation',
    username: '@skyjet',
    email: 'contact@skyjet.com',
    status: 'Active',
    foundingCompany: true,
    companyDetails: [
      { label: 'Business Name', value: 'SkyJet Aviation' },
      { label: 'Business Website', value: 'www.skyjet.com' },
      { label: 'Industry / Sector', value: 'Charter & Private Aviation' },
      { label: 'Website', value: 'skyjet.com' },
    ],
    primaryContact: [
      { label: 'Username', value: '@skyjet' },
      { label: 'Full Name', value: 'James Smith' },
      { label: 'Role in Company', value: 'Employee' },
      { label: 'Work Email', value: 'james@skyjet.com' },
      { label: 'Phone Number', value: '+61 3456 76543' },
    ],
    activity: [
      { label: 'Posts', value: '151' },
      { label: 'Followers', value: '112K' },
      { label: 'Following', value: '879' },
    ],
    account: [
      { label: 'Date Joined', value: 'Sep 12, 2025' },
      { label: 'Last Login', value: '2 hours ago' },
    ],
    employees: {
      used: 8,
      total: 20,
      list: [
        { initials: 'RM', name: 'Riya Kapoor', email: 'riya@skyjet.com', status: 'Active' },
        { initials: 'SM', name: 'Samir Patel', email: 'samir@skyjet.com', status: 'Inactive' },
        { initials: 'AV', name: 'Ava Thomas', email: 'ava@skyjet.com', status: 'Active' },
        { initials: 'NY', name: 'Nina Yadav', email: 'nina.p@skyjet.com', status: 'Active' },
      ],
    },
    subscription: {
      status: 'Active',
      seats: 20,
      inUse: 8,
      startDate: 'Jan 1, 2025',
      endDate: 'Dec 31, 2025',
      price: 70.99,
    },
    subscriptionHistory: [
      { date: 'Oct 25, 2026', amount: '$70.37', method: 'Stripe', transactionId: 'TXN-843934', status: 'Successful' },
      { date: 'Aug 17, 2026', amount: '$70.37', method: 'Stripe', transactionId: 'TXN-843932', status: 'Successful' },
      { date: 'Jul 22, 2026', amount: '$70.37', method: 'Bank transfer', transactionId: 'TXN-843931', status: 'Successful' },
      { date: 'Apr 15, 2026', amount: '$70.37', method: 'Stripe', transactionId: 'TXN-843928', status: 'Refunded' },
    ],
  },
}

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null
  return status
}

export const companiesService = {
  getAll: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)
    const normalizedSearch = search.trim().toLowerCase()

    const filtered = companiesMockData.filter((company) => {
      const matchesStatus = normalizedStatus ? company.status === normalizedStatus : true
      const matchesSearch = normalizedSearch
        ? [company.company, company.username, company.email].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: companiesMockData.length,
        visible: filtered.length,
      },
    })
  },

  getById: async (id) => {
    const details = companyDetailsMock[id] ?? companyDetailsMock['skyjet-aviation']
    return Promise.resolve(details)
  },
}
