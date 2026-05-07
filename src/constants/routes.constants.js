export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  CHECK_EMAIL: '/check-email',
  RESET_PASSWORD: '/reset-password',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  USER_DETAIL: (id = ':id') => `/users/${id}`,
}
