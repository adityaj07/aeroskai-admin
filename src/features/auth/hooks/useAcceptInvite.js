import { useMutation } from '@tanstack/react-query'

import { authService } from '../services/auth.service'

export const useAcceptInvite = () => {
  return useMutation({
    mutationFn: ({ token }) => authService.acceptInvite({ token }),
  })
}
