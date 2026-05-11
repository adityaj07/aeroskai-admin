import { ROUTES } from '@/constants/routes.constants'

export const breadcrumbConfig = [
  {
    match: /^\/dashboard$/,
    items: [{ label: 'Dashboard' }],
  },

  {
    match: /^\/dashboard\/companies$/,
    items: [{ label: 'Companies', to: `${ROUTES.DASHBOARD}/${ROUTES.COMPANIES}` }],
  },

  {
    match: /^\/dashboard\/companies\/create$/,
    items: [
      {
        label: 'Companies',
        to: `${ROUTES.DASHBOARD}/${ROUTES.COMPANIES}`,
      },
      {
        label: 'Create Company Account',
      },
    ],
  },

  {
    match: /^\/dashboard\/companies\/[^/]+$/,
    items: [
      {
        label: 'Companies',
        to: `${ROUTES.DASHBOARD}/${ROUTES.COMPANIES}`,
      },
      {
        dynamic: 'companyName',
      },
    ],
  },

  {
    match: /^\/dashboard\/users$/,
    items: [{ label: 'Individual Users' }],
  },

  {
    match: /^\/dashboard\/users\/[^/]+$/,
    items: [
      {
        label: 'Individual Users',
        to: `${ROUTES.DASHBOARD}/${ROUTES.USERS}`,
      },
      {
        dynamic: 'username',
      },
    ],
  },

  {
    match: /^\/dashboard\/applications$/,
    items: [{ label: 'Applications' }],
  },

  {
    match: /^\/dashboard\/applications\/[^/]+$/,
    items: [
      {
        label: 'Applications',
        to: `${ROUTES.DASHBOARD}/${ROUTES.APPLICATIONS}`,
      },
      {
        dynamic: 'applicationName',
      },
    ],
  },

  {
    match: /^\/dashboard\/reports$/,
    items: [{ label: 'Reports' }],
  },

  {
    match: /^\/dashboard\/reports\/[^/]+$/,
    items: [
      {
        label: 'Reports',
        to: `${ROUTES.DASHBOARD}/${ROUTES.REPORTS}`,
      },
      {
        label: 'Report Details',
      },
    ],
  },
]
