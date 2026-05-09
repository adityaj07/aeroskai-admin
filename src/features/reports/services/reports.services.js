const reportsMockData = [
  {
    id: 'REP-1021',
    reportedType: 'Post',
    reportsCount: 2,
    target: 'Post #843',
    status: 'Pending',
    date: 'Mar 29, 2026',
  },
  {
    id: 'REP-1022',
    reportedType: 'Comment',
    reportsCount: 1,
    target: 'Comment #444',
    status: 'Pending',
    date: 'Mar 28, 2026',
  },
  {
    id: 'REP-1023',
    reportedType: 'Users',
    reportsCount: 5,
    target: 'Like #789',
    status: 'Pending',
    date: 'Mar 27, 2026',
  },
  {
    id: 'REP-1024',
    reportedType: 'Users',
    reportsCount: 3,
    target: 'Share #567',
    status: 'Resolved',
    date: 'Mar 26, 2026',
  },
  {
    id: 'REP-1025',
    reportedType: 'Users',
    reportsCount: 1,
    target: 'Reply #453',
    status: 'Under Review',
    date: 'Mar 25, 2026',
  },
  {
    id: 'REP-1026',
    reportedType: 'Post',
    reportsCount: 2,
    target: 'Post #234',
    status: 'Resolved',
    date: 'Mar 24, 2026',
  },
  {
    id: 'REP-1027',
    reportedType: 'Comment',
    reportsCount: 5,
    target: 'Comment #678',
    status: 'Under Review',
    date: 'Mar 23, 2026',
  },
  {
    id: 'REP-1028',
    reportedType: 'Users',
    reportsCount: 2,
    target: 'Like #123',
    status: 'Resolved',
    date: 'Mar 23, 2026',
  },
  {
    id: 'REP-1029',
    reportedType: 'Users',
    reportsCount: 1,
    target: 'Share #999',
    status: 'Rejected',
    date: 'Mar 23, 2026',
  },
]

const normalizeStatusFilter = (status) => {
  if (status === 'All') return null
  return status
}

export const reportsService = {
  getAll: async ({ status = 'All', search = '' } = {}) => {
    const normalizedStatus = normalizeStatusFilter(status)

    const normalizedSearch = search.trim().toLowerCase()

    const filtered = reportsMockData.filter((report) => {
      const matchesStatus = normalizedStatus ? report.status === normalizedStatus : true

      const matchesSearch = normalizedSearch
        ? [report.id, report.reportedType, report.target].some((field) =>
            field.toLowerCase().includes(normalizedSearch)
          )
        : true

      return matchesStatus && matchesSearch
    })

    return Promise.resolve({
      data: filtered,
      meta: {
        total: reportsMockData.length,
        visible: filtered.length,
      },
    })
  },
}
