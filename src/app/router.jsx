import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import ErrorBoundary from '@/components/shared/ErrorBoundary/ErrorBoundary'
import PrivateRoute from '@/components/shared/PrivateRoute/PrivateRoute'
import { ROUTES } from '@/constants/routes.constants'
import { RouteSuspense } from '@/components/shared/app/RouteSuspense'
import AccountActivatedPage from '@/features/auth/pages/AccountActivatedPage'

const AuthLayout = lazy(() => import('@/features/auth/layouts/AuthLayout'))
const DashboardLayout = lazy(() => import('@/features/dashboard/layouts/DashboardLayout'))

const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'))
const ForgotPasswordPage = lazy(() => import('@/features/auth/pages/ForgotPasswordPage'))
const CheckEmailPage = lazy(() => import('@/features/auth/pages/CheckEmailPage'))
const ResetPasswordPage = lazy(() => import('@/features/auth/pages/ResetPasswordPage'))
const InvitedPage = lazy(() => import('@/features/auth/pages/InvitedPage'))
const CreateInvitedAccountPage = lazy(
  () => import('@/features/auth/pages/CreateInvitedAccountPage')
)

const DashboardPage = lazy(() => import('@/features/dashboard/pages/DashboardPage'))

const CompaniesPage = lazy(() => import('@/features/companies/pages/CompaniesPage'))
const CompanyDetailsPage = lazy(() => import('@/features/companies/pages/CompanyDetailsPage'))
const CreateCompanyPage = lazy(() => import('@/features/companies/pages/CreateCompanyPage'))

const ApplicationsPage = lazy(() => import('@/features/applications/pages/ApplicationsPage'))
const ApplicationDetailsPage = lazy(
  () => import('@/features/applications/pages/ApplicationDetailsPage')
)

const UsersPage = lazy(() => import('@/features/users/pages/UsersPage'))
const UserDetailsPage = lazy(() => import('@/features/users/pages/UserDetailsPage'))

const SubscriptionsPage = lazy(() => import('@/features/subscriptions/pages/SubscriptionsPage'))
const CompanySubscriptionDetailsPage = lazy(
  () => import('@/features/subscriptions/pages/CompanySubscriptionDetailsPage')
)
const UserSubscriptionDetailsPage = lazy(
  () => import('@/features/subscriptions/pages/UserSubscriptionDetailsPage')
)

const PaymentsPage = lazy(() => import('@/features/payments/pages/PaymentsPage'))

const SupportPage = lazy(() => import('@/features/support/pages/SupportPage'))

const ReportsPage = lazy(() => import('@/features/reports/pages/ReportsPage'))
const ReportDetailsPage = lazy(() => import('@/features/reports/pages/ReportDetailsPage'))

const SettingsPage = lazy(() => import('@/features/settings/page/SettingsPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={ROUTES.LOGIN} replace />,
  },

  {
    element: (
      <RouteSuspense>
        <AuthLayout />
      </RouteSuspense>
    ),

    children: [
      {
        path: ROUTES.LOGIN,
        element: (
          <RouteSuspense>
            <LoginPage />
          </RouteSuspense>
        ),
      },

      {
        path: ROUTES.FORGOT_PASSWORD,
        element: (
          <RouteSuspense>
            <ForgotPasswordPage />
          </RouteSuspense>
        ),
      },

      {
        path: ROUTES.CHECK_EMAIL,
        element: (
          <RouteSuspense>
            <CheckEmailPage />
          </RouteSuspense>
        ),
      },

      {
        path: ROUTES.RESET_PASSWORD,
        element: (
          <RouteSuspense>
            <ResetPasswordPage />
          </RouteSuspense>
        ),
      },

      {
        path: ROUTES.INVITED,
        element: (
          <RouteSuspense>
            <InvitedPage />
          </RouteSuspense>
        ),
      },

      {
        path: ROUTES.CREATE_INVITED_ACCOUNT,
        element: (
          <RouteSuspense>
            <CreateInvitedAccountPage />
          </RouteSuspense>
        ),
      },

      {
        path: ROUTES.ACCOUNT_ACTIVATED,
        element: (
          <RouteSuspense>
            <AccountActivatedPage />
          </RouteSuspense>
        ),
      },
    ],
  },

  {
    element: <PrivateRoute />,
    errorElement: <ErrorBoundary />,

    children: [
      {
        path: ROUTES.DASHBOARD,

        element: (
          <RouteSuspense>
            <DashboardLayout />
          </RouteSuspense>
        ),

        children: [
          {
            index: true,

            element: (
              <RouteSuspense>
                <DashboardPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.COMPANIES,

            element: (
              <RouteSuspense>
                <CompaniesPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.COMPANY_CREATE,

            element: (
              <RouteSuspense>
                <CreateCompanyPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.COMPANY_DETAIL(),

            element: (
              <RouteSuspense>
                <CompanyDetailsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.APPLICATIONS,

            element: (
              <RouteSuspense>
                <ApplicationsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.APPLICATION_DETAIL(),

            element: (
              <RouteSuspense>
                <ApplicationDetailsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.USERS,

            element: (
              <RouteSuspense>
                <UsersPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.USER_DETAIL(),

            element: (
              <RouteSuspense>
                <UserDetailsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.SUBSCRIPTIONS,

            element: (
              <RouteSuspense>
                <SubscriptionsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.SUBSCRIPTION_DETAIL_COMPANY(),

            element: (
              <RouteSuspense>
                <CompanySubscriptionDetailsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.SUBSCRIPTION_DETAIL_USER(),

            element: (
              <RouteSuspense>
                <UserSubscriptionDetailsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.PAYMENTS,

            element: (
              <RouteSuspense>
                <PaymentsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.SUPPORT,

            element: (
              <RouteSuspense>
                <SupportPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.REPORTS,

            element: (
              <RouteSuspense>
                <ReportsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.REPORT_DETAIL(),

            element: (
              <RouteSuspense>
                <ReportDetailsPage />
              </RouteSuspense>
            ),
          },

          {
            path: ROUTES.SETTINGS,

            element: (
              <RouteSuspense>
                <SettingsPage />
              </RouteSuspense>
            ),
          },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <div>404 — Page not found</div>,
  },
])

export const AppRouter = () => <RouterProvider router={router} />
