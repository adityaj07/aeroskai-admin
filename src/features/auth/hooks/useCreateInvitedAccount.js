import { useMutation } from '@tanstack/react-query'

import { authService } from '../services/auth.service'

export const useCreateInvitedAccount = () => {
  return useMutation({
    mutationFn: (payload) => authService.createInvitedAccount(payload),
  })
}
