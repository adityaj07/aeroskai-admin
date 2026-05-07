import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PrivateRoute from '@/components/shared/PrivateRoute/PrivateRoute'
import ErrorBoundary from '@/components/shared/ErrorBoundary/ErrorBoundary'
import { ROUTES } from '@/constants/routes.constants'
import AuthLayout from '@/features/auth/layouts/AuthLayout'
import ForgotPasswordPage from '@/features/auth/pages/ForgotPasswordPage'
import CheckEmailPage from '@/features/auth/pages/CheckEmailPage'
import ResetPasswordPage from '@/features/auth/pages/ResetPasswordPage'
import DashboardLayout from '@/features/dashboard/layouts/DashboardLayout'
import CompaniesPage from '@/features/dashboard/pages/CompaniesPage'
import ApplicationsPage from '@/features/dashboard/pages/ApplicationsPage'
import SettingsPage from '@/features/settings/page/SettingsPage'
import ReportsPage from '@/features/dashboard/pages/ReportsPage'
import SupportPage from '@/features/dashboard/pages/SupportPage'
import PaymentsPage from '@/features/dashboard/pages/PaymentsPage'
import SubscriptionsPage from '@/features/dashboard/pages/SubscriptionsPage'

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
            path: ROUTES.APPLICATIONS,
            element: <ApplicationsPage />,
          },

          {
            path: ROUTES.USERS,
            element: <UsersPage />,
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
