const applicationsMockData = [
  {
    id: 'globaltech-ventures',
    company: 'GlobalTech Ventures',
    logoAlt: 'GlobalTech Ventures logo',
    contactEmail: 'james@skyjet.com',
    status: 'Pending Review',
    submittedDate: 'Apr 23, 2025',
  },
  {
    id: 'skyjet-aviation',
    company: 'SkyJet Aviation',
    logoAlt: 'SkyJet Aviation logo',
    contactEmail: 'contact@skyjet.com',
    status: 'Approved',
    submittedDate: 'Dec 31, 2026',
  },
  {
    id: 'aerowave-airlines',
    company: 'AeroWave Airlines',
    logoAlt: 'AeroWave Airlines logo',
    contactEmail: 'info@aerowave.com',
    status: 'Approved',
    submittedDate: 'Jan 15, 2025',
  },
  {
    id: 'bluesky-charter',
    company: 'BlueSky Charter',
    logoAlt: 'BlueSky Charter logo',
    contactEmail: 'support@bluesky.com',
    status: 'Rejected',
    submittedDate: 'Feb 28, 2024',
  },
  {
    id: 'skylight-services',
    company: 'Skylight Services',
    logoAlt: 'Skylight Services logo',
    contactEmail: 'contact@skylight.com',
    status: 'Pending Review',
    submittedDate: 'Apr 22, 2025',
  },
]

const applicationDetailsMock = {
  'globaltech-ventures': {
    id: 'globaltech-ventures',
    company: 'GlobalTech Ventures',
    username: '@skyjet',
    email: 'james@skyjet.com',
    status: 'Pending Review',

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
      { label: 'Phone Number', value: '+61 34567 76543' },
    ],

    additionalDetails: [
      { label: 'Team Size', value: '12–25 employees' },
      { label: 'Seats Needed', value: '10' },
      { label: 'Referral Source', value: 'Conference — AeroExpo 2025' },
      { label: 'Date Submitted', value: 'Apr 23, 2025 — 9:14 AM' },
    ],

    statusHistory: [
      {
        title: 'Application submitted',
        date: 'Apr 23, 2025 — 9:14 AM',
      },
    ],
  },

  'skyjet-aviation': {
    id: 'skyjet-aviation',
    company: 'SkyJet Aviation',
    username: '@skyjet',
    email: 'contact@skyjet.com',
    status: 'Approved',

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
      { label: 'Phone Number', value: '+61 34567 76543' },
    ],

    additionalDetails: [
      { label: 'Team Size', value: '12–25 employees' },
      { label: 'Seats Needed', value: '10' },
      { label: 'Referral Source', value: 'Conference — AeroExpo 2025' },
      { label: 'Date Submitted', value: 'Apr 23, 2025 — 9:14 AM' },
    ],

    statusHistory: [
      {
        title: 'Application submitted',
        date: 'Apr 23, 2025 — 9:14 AM',
      },
      {
        title: 'Application approved',
        date: 'Apr 25, 2025 — 11:32 AM',
      },
    ],
  },
}

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null
  return status
}

export const applicationsService = {
  getAll: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)
    const normalizedSearch = search.trim().toLowerCase()

    const filtered = applicationsMockData.filter((company) => {
      const matchesStatus = normalizedStatus ? company.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? [company.company, company.contactEmail].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: applicationsMockData.length,
        visible: filtered.length,
      },
    })
  },

  getById: async (id) => {
    const details = applicationDetailsMock[id] ?? applicationDetailsMock['globaltech-ventures']

    return Promise.resolve(details)
  },
}
