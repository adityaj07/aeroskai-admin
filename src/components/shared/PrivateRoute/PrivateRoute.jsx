import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '@/constants/routes.constants'

const PrivateRoute = () => {
  // const token = localStorage.getItem('accessToken')
  const token = true
  return token ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />
}

export default PrivateRoute
