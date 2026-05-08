const usersMockData = [
  {
    id: 'savannah17',
    fullName: 'Isabella Walker',
    username: '@savannah17',
    email: 'isabella@flightpath.com',
    subscription: 'Active',
    dateJoined: 'Sep 12, 2025',
    status: 'Active',
  },
  {
    id: 'olivia-white',
    fullName: 'Olivia White',
    username: '@olivia_white',
    email: 'olivia.white@mail.com',
    subscription: 'Active',
    dateJoined: 'Mar 5, 2025',
    status: 'Active',
  },
  {
    id: 'sophie-jones',
    fullName: 'Sophie Jones',
    username: '@sophie_jones',
    email: 'sophie.jones@mail.com',
    subscription: 'Active',
    dateJoined: 'Jan 1, 2025',
    status: 'Active',
  },
  {
    id: 'james-brown',
    fullName: 'James Brown',
    username: '@james.brown',
    email: 'james.brown@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Apr 25, 2025',
    status: 'Inactive',
  },
  {
    id: 'sara-lee',
    fullName: 'Sara Lee',
    username: '@sara_lee',
    email: 'sara.lee@mail.com',
    subscription: 'Active',
    dateJoined: 'May 10, 2025',
    status: 'Active',
  },
  {
    id: 'jack-smith',
    fullName: 'Jack Smith',
    username: '@jack_smith',
    email: 'jack.smith@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Feb 14, 2025',
    status: 'Inactive',
  },
  {
    id: 'michael-johnson',
    fullName: 'Michael Johnson',
    username: '@michael.johnson',
    email: 'michael.johnson@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Jun 20, 2025',
    status: 'Inactive',
  },
  {
    id: 'linda-smith',
    fullName: 'Linda Smith',
    username: '@linda.smith',
    email: 'linda.smith@mail.com',
    subscription: 'Active',
    dateJoined: 'Jul 15, 2025',
    status: 'Active',
  },
  {
    id: 'ethan-walker',
    fullName: 'Ethan Walker',
    username: '@ethan_walker',
    email: 'ethan.walker@mail.com',
    subscription: 'Inactive',
    dateJoined: 'Aug 30, 2025',
    status: 'Inactive',
  },
  {
    id: 'jason34',
    fullName: 'Jason Miller',
    username: '@jason34',
    email: 'jason34@mail.com',
    subscription: 'Active',
    dateJoined: 'Mar 15, 2024',
    status: 'Active',
  },
  {
    id: 'lily22',
    fullName: 'Lily Anderson',
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
    fullName: 'Isabella Walker',
    email: 'isabella@flightpath.com',
    phoneNumber: '+61 98765 23456',
    status: 'Active',
    professionalDetails: {
      role: 'Pilot',
      sector: 'Airline',
      goals: '5 years',
      referral: 'Friend Referral',
    },
    activity: {
      posts: 151,
      followers: '112K',
      following: 879,
    },
    account: {
      accountType: 'Public',
      dateJoined: 'Sep 12, 2025',
      lastLogin: '2 hours ago',
    },
    subscription: {
      plan: 'Monthly',
      startDate: 'Sep 12, 2025',
      endDate: 'Oct 12, 2025',
      status: 'Active',
    },
  },
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export const usersService = {
  getAll: async (params = {}) => {
    await delay(120)
    const { status = 'All', search = '' } = params

    const filtered = usersMockData.filter((u) => {
      if (status && status !== 'All' && u.status !== status) return false
      if (search) {
        const s = search.toLowerCase()
        return (
          u.fullName.toLowerCase().includes(s) ||
          u.username.toLowerCase().includes(s) ||
          u.email.toLowerCase().includes(s)
        )
      }
      return true
    })

    return { data: filtered }
  },

  getById: async (userId) => {
    await delay(80)
    const rawKey = userId?.toString()?.trim()
    const normalizedKey = rawKey?.replace(/^@/, '')
    const details =
      userDetailsMock[rawKey] ||
      userDetailsMock[normalizedKey] ||
      Object.values(userDetailsMock).find(
        (detail) =>
          detail.id === rawKey ||
          detail.id === normalizedKey ||
          detail.username === rawKey ||
          detail.username === `@${normalizedKey}`
      )
    if (details) return details

    const user = usersMockData.find(
      (u) =>
        u.id === rawKey ||
        u.id === normalizedKey ||
        u.username === rawKey ||
        u.username === `@${normalizedKey}`
    )
    if (!user) throw new Error('User not found')

    return {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber ?? '',
      status: user.status,
      professionalDetails: {
        role: user.role ?? '—',
        sector: user.sector ?? '—',
        goals: user.goals ?? '—',
        referral: user.referral ?? '—',
      },
      activity: {
        posts: user.posts ?? 0,
        followers: user.followers ?? '0',
        following: user.following ?? 0,
      },
      account: {
        accountType: user.accountType ?? '—',
        dateJoined: user.dateJoined,
        lastLogin: user.lastLogin ?? '—',
      },
      subscription: {
        plan: user.subscription ?? '—',
        startDate: user.subscriptionStartDate ?? '—',
        endDate: user.subscriptionEndDate ?? '—',
        status: user.status,
      },
    }
  },

  updateStatus: async (userId, newStatus) => {
    await delay(80)
    const idx = usersMockData.findIndex((u) => u.id === userId || u.username === userId)
    if (idx === -1) throw new Error('User not found')
    usersMockData[idx].status = newStatus

    const detailKey = userId?.toString()
    if (userDetailsMock[detailKey]) {
      userDetailsMock[detailKey] = {
        ...userDetailsMock[detailKey],
        status: newStatus,
        subscription: {
          ...userDetailsMock[detailKey].subscription,
          status: newStatus,
        },
      }
    }

    return usersMockData[idx]
  },
}

export default usersService
