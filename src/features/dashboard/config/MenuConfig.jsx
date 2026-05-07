import { ROUTES } from '@/constants/routes.constants'
import {
  AddToListIcon,
  Building01Icon,
  ChatQuestionIcon,
  Crown03Icon,
  DollarCircleIcon,
  Settings01Icon,
  SidebarTopIcon,
  UserSharingIcon,
  UserWarning01Icon,
} from '@hugeicons/core-free-icons'

export const dashboardNavigation = [
  {
    title: 'Dashboard',
    url: ROUTES.DASHBOARD,
    icon: SidebarTopIcon,
  },
  {
    title: 'Companies',
    url: ROUTES.COMPANIES,
    icon: Building01Icon,
  },
  {
    title: 'Applications',
    url: ROUTES.APPLICATIONS,
    icon: AddToListIcon,
    badge: 5,
  },
  {
    title: 'Individual Users',
    url: ROUTES.USERS,
    icon: UserSharingIcon,
  },
  {
    title: 'Subscriptions',
    url: ROUTES.SUBSCRIPTIONS,
    icon: Crown03Icon,
  },
  {
    title: 'Payments',
    url: ROUTES.PAYMENTS,
    icon: DollarCircleIcon,
  },
  {
    title: 'Support Chat',
    url: ROUTES.SUPPORT,
    icon: ChatQuestionIcon,
    badge: 9,
  },
  {
    title: 'Reports',
    url: ROUTES.REPORTS,
    icon: UserWarning01Icon,
    badge: 6,
  },
  {
    title: 'Settings',
    url: ROUTES.SETTINGS,
    icon: Settings01Icon,
  },
]
