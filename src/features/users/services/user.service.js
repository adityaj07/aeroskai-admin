const usersMockData = [
  {
    id: 'savannah17',
    username: '@savannah17',
    email: 'savannah17@mail.com',
    subscription: 'Active',
    dateJoined: 'Sep 12, 2025',
    status: 'Active',
  },
  {
    id: 'olivia-white',
    username: '@olivia_white',
    email: 'olivia.white@mail.com',
    subscription: 'Active',
    dateJoined: 'Mar 5, 2025',
    status: 'Active',
  },
  {
    id: 'sophie-jones',
    username: '@sophie_jones',
    email: 'sophie.jones@mail.com',
    subscription: 'Active',
    dateJoined: 'Jan 1, 2025',
    status: 'Active',
  },
  {
    id: 'james-brown',
    username: '@james.brown',
    email: 'james.brown@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Apr 25, 2025',
    status: 'Inactive',
  },
  {
    id: 'sara-lee',
    username: '@sara_lee',
    email: 'sara.lee@mail.com',
    subscription: 'Active',
    dateJoined: 'May 10, 2025',
    status: 'Active',
  },
  {
    id: 'jack-smith',
    username: '@jack_smith',
    email: 'jack.smith@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Feb 14, 2025',
    status: 'Inactive',
  },
  {
    id: 'michael-johnson',
    username: '@michael.johnson',
    email: 'michael.johnson@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Jun 20, 2025',
    status: 'Inactive',
  },
  {
    id: 'linda-smith',
    username: '@linda.smith',
    email: 'linda.smith@mail.com',
    subscription: 'Active',
    dateJoined: 'Jul 15, 2025',
    status: 'Active',
  },
  {
    id: 'ethan-walker',
    username: '@ethan_walker',
    email: 'ethan.walker@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Aug 30, 2025',
    status: 'Inactive',
  },
  {
    id: 'jason34',
    username: '@jason34',
    email: 'jason34@mail.com',
    subscription: 'Active',
    dateJoined: 'Mar 15, 2024',
    status: 'Active',
  },
  {
    id: 'lily22',
    username: '@lily22',
    email: 'lily22@mail.com',
    subscription: 'Pending',
    dateJoined: 'Nov 23, 2023',
    status: 'Active',
  },
]

const userDetailsMock = {
  savannah17: {
    id: 'savannah17',
    username: '@savannah17',
    fullName: 'Savannah Carter',
    email: 'savannah17@mail.com',
    status: 'Active',

    accountDetails: [
      { label: 'Username', value: '@savannah17' },
      { label: 'Full Name', value: 'Savannah Carter' },
      { label: 'Email Address', value: 'savannah17@mail.com' },
      { label: 'Phone Number', value: '+1 202 555 0123' },
    ],

    subscriptionDetails: [
      { label: 'Subscription Status', value: 'Active' },
      { label: 'Plan Type', value: 'Professional' },
      { label: 'Renewal Date', value: 'Dec 12, 2025' },
    ],

    activityDetails: [
      { label: 'Date Joined', value: 'Sep 12, 2025' },
      { label: 'Last Active', value: '2 hours ago' },
    ],
  },

  'olivia-white': {
    id: 'olivia-white',
    username: '@olivia_white',
    fullName: 'Olivia White',
    email: 'olivia.white@mail.com',
    status: 'Active',

    accountDetails: [
      { label: 'Username', value: '@olivia_white' },
      { label: 'Full Name', value: 'Olivia White' },
      { label: 'Email Address', value: 'olivia.white@mail.com' },
      { label: 'Phone Number', value: '+1 202 555 0188' },
    ],

    subscriptionDetails: [
      { label: 'Subscription Status', value: 'Active' },
      { label: 'Plan Type', value: 'Enterprise' },
      { label: 'Renewal Date', value: 'Mar 5, 2026' },
    ],

    activityDetails: [
      { label: 'Date Joined', value: 'Mar 5, 2025' },
      { label: 'Last Active', value: '1 day ago' },
    ],
  },
}

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null
  return status
}

export const usersService = {
  getAll: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)
    const normalizedSearch = search.trim().toLowerCase()

    const filtered = usersMockData.filter((user) => {
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
        total: usersMockData.length,
        visible: filtered.length,
      },
    })
  },

  getById: async (id) => {
    const details = userDetailsMock[id] ?? userDetailsMock['savannah17']

    return Promise.resolve(details)
  },
}
