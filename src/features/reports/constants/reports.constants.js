export const REPORTS_QUERY_KEYS = {
  list: ['reports', 'list'],
  detail: (reportId) => ['reports', 'detail', reportId],
}

export const REPORT_STATUS_FILTERS = ['All', 'Pending', 'Under Review', 'Resolved', 'Rejected']

export const REPORT_CONTENT_TYPE_FILTERS = ['All Content', 'Post', 'Comment', 'Users']

export const REPORT_DURATION_FILTERS = ['Last 7 days', 'Last 30 days', 'Last 90 days']
