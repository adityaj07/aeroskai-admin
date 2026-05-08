export const APPLICATIONS_QUERY_KEYS = {
  list: ['applications', 'list'],
  details: (applicationId) => ['applications', 'details', applicationId],
}

export const APPLICATION_STATUS_FILTERS = ['All', 'Pending Review', 'Approved', 'Rejected']
