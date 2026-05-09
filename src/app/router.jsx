import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorBoundary from '@/components/shared/ErrorBoundary/ErrorBoundary'
import PrivateRoute from '@/components/shared/PrivateRoute/PrivateRoute'
import { ROUTES } from '@/constants/routes.constants'
import ApplicationDetailsPage from '@/features/applications/pages/ApplicationDetailsPage'
import ApplicationsPage from '@/features/applications/pages/ApplicationsPage'
import AuthLayout from '@/features/auth/layouts/AuthLayout'
import CheckEmailPage from '@/features/auth/pages/CheckEmailPage'
import ForgotPasswordPage from '@/features/auth/pages/ForgotPasswordPage'
import ResetPasswordPage from '@/features/auth/pages/ResetPasswordPage'
import CompaniesPage from '@/features/companies/pages/CompaniesPage'
import CompanyDetailsPage from '@/features/companies/pages/CompanyDetailsPage'
import CreateCompanyPage from '@/features/companies/pages/CreateCompanyPage'
import DashboardLayout from '@/features/dashboard/layouts/DashboardLayout'
import PaymentsPage from '@/features/payments/pages/PaymentsPage'
import ReportsPage from '@/features/dashboard/pages/ReportsPage'
import SubscriptionsPage from '@/features/subscriptions/pages/SubscriptionsPage'
import SupportPage from '@/features/dashboard/pages/SupportPage'
import SettingsPage from '@/features/settings/page/SettingsPage'
import UserDetailsPage from '@/features/users/pages/UserDetailsPage'

const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'))
const DashboardPage = lazy(() => import('@/features/dashboard/pages/DashboardPage'))
const UsersPage = lazy(() => import('@/features/users/pages/UsersPage'))

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
      { path: ROUTES.CHECK_EMAIL, element: <CheckEmailPage /> },
      { path: ROUTES.RESET_PASSWORD, element: <ResetPasswordPage /> },
    ],
  },

  {
    element: <PrivateRoute />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },

          {
            path: ROUTES.COMPANIES,
            element: <CompaniesPage />,
          },
          {
            path: ROUTES.COMPANY_CREATE,
            element: <CreateCompanyPage />,
          },
          {
            path: ROUTES.COMPANY_DETAIL(),
            element: <CompanyDetailsPage />,
          },
          {
            path: ROUTES.APPLICATIONS,
            element: <ApplicationsPage />,
          },
          {
            path: ROUTES.APPLICATION_DETAIL(),
            element: <ApplicationDetailsPage />,
          },
          {
            path: ROUTES.USERS,
            element: <UsersPage />,
          },
          {
            path: ROUTES.USER_DETAIL(),
            element: <UserDetailsPage />,
          },
          {
            path: ROUTES.SUBSCRIPTIONS,
            element: <SubscriptionsPage />,
          },

          {
            path: ROUTES.PAYMENTS,
            element: <PaymentsPage />,
          },

          {
            path: ROUTES.SUPPORT,
            element: <SupportPage />,
          },

          {
            path: ROUTES.REPORTS,
            element: <ReportsPage />,
          },

          {
            path: ROUTES.SETTINGS,
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },

  { path: '*', element: <div>404 — Page not found</div> },
])

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
)
