import { ENDPOINTS } from '@/constants/api.constants'
import api from '@/services/api/axios.instance'

export const authService = {
  login:    (data)  => api.post(ENDPOINTS.LOGIN, data),
  register: (data)  => api.post(ENDPOINTS.REGISTER, data),
  logout:   ()      => api.post(ENDPOINTS.LOGOUT),
  refresh:  ()      => api.post(ENDPOINTS.REFRESH),
  getMe:    ()      => api.get(ENDPOINTS.ME),
  acceptInvite: async ({ token }) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return Promise.resolve({ data: { accepted: true, token } })
  },
  createInvitedAccount: async ({ email, password, token }) => {
    await new Promise((resolve) => setTimeout(resolve, 700))
    return Promise.resolve({ data: { user: { email }, token, passwordSet: Boolean(password) } })
  },
}
