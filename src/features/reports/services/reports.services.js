const reportedPostImage =
  'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1400&q=80'

const reportedUserAvatar =
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&q=80'

const reportsMockData = [
  {
    id: 'REP-1021',
    reportedType: 'Post',
    reportsCount: 2,
    target: 'Post #843',
    status: 'Pending',
    date: 'Mar 29, 2026',
    dateSubmitted: 'Mar 18, 2026',
    entityType: 'post',
    allowMarkAsDuplicate: false,
    reportedEntity: {
      author: 'Sara',
      authorAvatar: reportedUserAvatar,
      image: reportedPostImage,
      caption:
        'Savannah Flying high for 5 years. Views are great from up here. Certified pilot. Enjoyer of long walks on the tarmac.',
      timeAgo: '11 hours ago',
    },
    reportingAccounts: [
      {
        username: '@john_doe',
        email: 'johndoe@email.com',
        reason: 'Spam',
        notes: 'This post looks like promotional spam repeated multiple times.',
      },
      {
        username: '@jane_smith',
        email: 'janesmith@email.com',
        reason: 'Misleading Content',
        notes: '',
      },
      {
        username: '@alex_johnson',
        email: 'alexjohnson@email.com',
        reason: 'Harassment',
        notes: '',
      },
    ],
  },
  {
    id: 'REP-1022',
    reportedType: 'Comment',
    reportsCount: 1,
    target: 'Comment #444',
    status: 'Pending',
    date: 'Mar 28, 2026',
    dateSubmitted: 'Mar 18, 2026',
    entityType: 'comment',
    allowMarkAsDuplicate: true,
    reportedEntity: {
      image: reportedPostImage,
      comment:
        'Savannah Flying high for 5 years. Views are great from up here. Certified pilot. Enjoyer of long walks on the tarmac.',
      timeAgo: '11 hours ago',
    },
    reportingAccounts: [
      {
        username: '@john_doe',
        email: 'johndoe@email.com',
        reason: 'Spam',
        notes: 'This post looks like promotional spam repeated multiple times.',
      },
      {
        username: '@jane_smith',
        email: 'janesmith@email.com',
        reason: 'Offensive Language',
        notes: '',
      },
      {
        username: '@alex_johnson',
        email: 'alexjohnson@email.com',
        reason: 'Harassment',
        notes: '',
      },
    ],
  },
  {
    id: 'REP-1023',
    reportedType: 'Users',
    reportsCount: 5,
    target: 'User #789',
    status: 'Pending',
    date: 'Mar 27, 2026',
    dateSubmitted: 'Mar 18, 2026',
    entityType: 'user',
    allowMarkAsDuplicate: true,
    reportedEntity: {
      handle: '@Savannah17',
      fullName: 'Savannah H.',
      email: 'savannah@email.com',
      avatar: reportedUserAvatar,
    },
    reportingAccounts: [
      {
        username: '@john_doe',
        email: 'johndoe@email.com',
        reason: 'Spam',
        notes: 'This post looks like promotional spam repeated multiple times.',
      },
      {
        username: '@jane_smith',
        email: 'janesmith@email.com',
        reason: 'Fake profile',
        notes: '',
      },
      {
        username: '@alex_johnson',
        email: 'alexjohnson@email.com',
        reason: 'Impersonation',
        notes: '',
      },
    ],
  },
  {
    id: 'REP-1024',
    reportedType: 'Users',
    reportsCount: 3,
    target: 'User #567',
    status: 'Resolved',
    date: 'Mar 26, 2026',
    dateSubmitted: 'Mar 16, 2026',
    entityType: 'user',
    allowMarkAsDuplicate: true,
    reportedEntity: {
      handle: '@casey',
      fullName: 'Casey M',
      email: 'casey@email.com',
      avatar: '',
    },
    reportingAccounts: [],
  },
  {
    id: 'REP-1025',
    reportedType: 'Users',
    reportsCount: 1,
    target: 'User #453',
    status: 'Under Review',
    date: 'Mar 25, 2026',
    dateSubmitted: 'Mar 14, 2026',
    entityType: 'user',
    allowMarkAsDuplicate: true,
    reportedEntity: {
      handle: '@harper',
      fullName: 'Harper A',
      email: 'harper@email.com',
      avatar: '',
    },
    reportingAccounts: [],
  },
  {
    id: 'REP-1026',
    reportedType: 'Post',
    reportsCount: 2,
    target: 'Post #234',
    status: 'Resolved',
    date: 'Mar 24, 2026',
    dateSubmitted: 'Mar 13, 2026',
    entityType: 'post',
    allowMarkAsDuplicate: false,
    reportedEntity: {
      author: 'Alex',
      authorAvatar: '',
      image: reportedPostImage,
      caption: 'Demo post for resolved state.',
      timeAgo: '1 day ago',
    },
    reportingAccounts: [],
  },
  {
    id: 'REP-1027',
    reportedType: 'Comment',
    reportsCount: 5,
    target: 'Comment #678',
    status: 'Under Review',
    date: 'Mar 23, 2026',
    dateSubmitted: 'Mar 11, 2026',
    entityType: 'comment',
    allowMarkAsDuplicate: false,
    reportedEntity: {
      image: reportedPostImage,
      comment: 'Demo comment for under review state.',
      timeAgo: '3 days ago',
    },
    reportingAccounts: [],
  },
  {
    id: 'REP-1028',
    reportedType: 'Users',
    reportsCount: 2,
    target: 'User #123',
    status: 'Resolved',
    date: 'Mar 23, 2026',
    dateSubmitted: 'Mar 09, 2026',
    entityType: 'user',
    allowMarkAsDuplicate: false,
    reportedEntity: {
      handle: '@emma',
      fullName: 'Emma R',
      email: 'emma@email.com',
      avatar: '',
    },
    reportingAccounts: [],
  },
  {
    id: 'REP-1029',
    reportedType: 'Users',
    reportsCount: 1,
    target: 'User #999',
    status: 'Rejected',
    date: 'Mar 23, 2026',
    dateSubmitted: 'Mar 08, 2026',
    entityType: 'user',
    allowMarkAsDuplicate: false,
    reportedEntity: {
      handle: '@logan',
      fullName: 'Logan T',
      email: 'logan@email.com',
      avatar: '',
    },
    reportingAccounts: [],
  },
]

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null
  return status
}

const normalizeContentTypeFilter = (contentType) => {
  if (contentType === 'All Content') return null
  return contentType
}

const findReportById = (id) => reportsMockData.find((report) => report.id === id)

export const reportsService = {
  getAll: async ({
    status = 'All',
    search = '',
    contentType = 'All Content',
    duration = 'Last 30 days',
  } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)
    const normalizedContentType = normalizeContentTypeFilter(contentType)
    const normalizedSearch = search.trim().toLowerCase()

    const filtered = reportsMockData.filter((report) => {
      const matchesStatus = normalizedStatus ? report.status === normalizedStatus : true

      const matchesContentType = normalizedContentType
        ? report.reportedType === normalizedContentType
        : true

      const matchesSearch = normalizedSearch
        ? [report.id, report.reportedType, report.target].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesContentType && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: reportsMockData.length,
        visible: filtered.length,
        duration,
      },
    })
  },

  getDetails: async (reportId) => {
    const report = findReportById(reportId)
    return Promise.resolve(report ?? null)
  },
}
