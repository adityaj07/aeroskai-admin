import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PrivateRoute from '@/components/shared/PrivateRoute/PrivateRoute'
import ErrorBoundary from '@/components/shared/ErrorBoundary/ErrorBoundary'
import { ROUTES } from '@/constants/routes.constants'
import AuthLayout from '@/features/auth/layouts/AuthLayout'
import ForgotPasswordPage from '@/features/auth/pages/ForgotPasswordPage'
import CheckEmailPage from '@/features/auth/pages/CheckEmailPage'
import ResetPasswordPage from '@/features/auth/pages/ResetPasswordPage'

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
      { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
      { path: ROUTES.USERS, element: <UsersPage /> },
    ],
  },

  { path: '*', element: <div>404 — Page not found</div> },
])

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
)
