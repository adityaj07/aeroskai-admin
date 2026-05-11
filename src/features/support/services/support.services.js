const companySupportMockData = [
  {
    id: 'ticket-company-1',
    username: 'emily_n',
    companyName: 'SkyJet Aviation',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    lastMessage: "I'm locked out of my admin account, what should I do?",
    unreadCount: 0,
    status: 'Open',
    timeAgo: 'Just now',

    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: "Hi, I'm unable to access my admin account.",
        time: 'Sun 11:15 PM',
      },
      {
        id: 'msg-2',
        sender: 'admin',
        text: "I'm really sorry to hear that! Let's get this fixed for you right away.",
      },
      {
        id: 'msg-3',
        sender: 'user',
        text: 'I updated my password yesterday and now it says invalid credentials.',
      },
      {
        id: 'msg-4',
        sender: 'admin',
        text: "I've sent a password reset link to your email. Please check your inbox.",
      },
    ],
  },

  {
    id: 'ticket-company-2',
    username: 'mark_j',
    companyName: 'Cloud Nine Travel',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    lastMessage: 'Billing invoice is not downloading correctly.',
    unreadCount: 4,
    status: 'Pending',
    timeAgo: '2m ago',

    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: 'Our invoice PDF keeps failing to download.',
      },
      {
        id: 'msg-2',
        sender: 'admin',
        text: 'We are checking this issue internally.',
      },
    ],
  },

  {
    id: 'ticket-company-3',
    username: 'sarah_w',
    companyName: 'Nimbus Airlines',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    lastMessage: 'Thank you, the issue has been resolved.',
    unreadCount: 0,
    status: 'Resolved',
    timeAgo: '1h ago',

    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: 'Our employees are unable to access subscriptions.',
      },
      {
        id: 'msg-2',
        sender: 'admin',
        text: 'The issue has been fixed now. Please verify.',
      },
      {
        id: 'msg-3',
        sender: 'user',
        text: 'Thank you, everything works now.',
      },
    ],
  },
]

const individualSupportMockData = [
  {
    id: 'ticket-user-1',
    username: 'emily_n',
    fullName: 'Emily Nelson',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    lastMessage: "I'm locked out of my account, what should I do?",
    unreadCount: 0,
    status: 'Open',
    timeAgo: 'Just now',

    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: "Hi, I'm unable to access my account.",
        time: 'Sun 11:15 PM',
      },
      {
        id: 'msg-2',
        sender: 'admin',
        text: "I'm really sorry to hear that! Let's get this fixed for you right away.",
      },
      {
        id: 'msg-3',
        sender: 'user',
        text: 'Yes, I can help with that. First, can you confirm the email associated with your account?',
      },
      {
        id: 'msg-4',
        sender: 'admin',
        text: "Great, I've sent a password reset link to your email. Please check your inbox.",
      },
    ],
  },

  {
    id: 'ticket-user-2',
    username: 'kate_b',
    fullName: 'Kate Brown',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    lastMessage: 'I just updated my password but it still fails.',
    unreadCount: 5,
    status: 'Pending',
    timeAgo: '2m ago',

    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: 'I reset my password but cannot login.',
      },
      {
        id: 'msg-2',
        sender: 'admin',
        text: 'Please try clearing your browser cache and login again.',
      },
    ],
  },

  {
    id: 'ticket-user-3',
    username: 'jessica_m',
    fullName: 'Jessica Miller',
    avatar:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=200&auto=format&fit=crop',
    lastMessage: 'The issue is resolved now.',
    unreadCount: 0,
    status: 'Resolved',
    timeAgo: '4m ago',

    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: 'I was getting an error while updating my profile.',
      },
      {
        id: 'msg-2',
        sender: 'admin',
        text: 'We fixed the backend issue. Please try again.',
      },
      {
        id: 'msg-3',
        sender: 'user',
        text: 'The issue is resolved now.',
      },
    ],
  },

  {
    id: 'ticket-user-4',
    username: 'david_t',
    fullName: 'David Thompson',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    lastMessage: 'There seems to be a bug with profile settings.',
    unreadCount: 2,
    status: 'Pending',
    timeAgo: '3m ago',

    messages: [
      {
        id: 'msg-1',
        sender: 'user',
        text: 'Saving profile settings fails randomly.',
      },
    ],
  },
]

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null

  return status
}

export const supportService = {
  getCompanies: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)

    const normalizedSearch = search.trim().toLowerCase()

    const filtered = companySupportMockData.filter((ticket) => {
      const matchesStatus = normalizedStatus ? ticket.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? [ticket.username, ticket.companyName, ticket.lastMessage].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: companySupportMockData.length,
        visible: filtered.length,
      },
    })
  },

  getIndividuals: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)

    const normalizedSearch = search.trim().toLowerCase()

    const filtered = individualSupportMockData.filter((ticket) => {
      const matchesStatus = normalizedStatus ? ticket.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? [ticket.username, ticket.fullName, ticket.lastMessage].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: individualSupportMockData.length,
        visible: filtered.length,
      },
    })
  },
}
