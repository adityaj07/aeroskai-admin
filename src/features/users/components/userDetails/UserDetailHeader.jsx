import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { UserStatusBadge } from '../UserStatusBadge'

export const UserDetailHeader = ({ details }) => {
  const initials =
    details.fullName
      ?.split(' ')
      ?.map((name) => name.charAt(0).toUpperCase())
      ?.slice(0, 2)
      ?.join('') || 'U'

  return (
    <div className="p-2">
      <div className="flex items-start justify-between gap-4">
        {/* Left */}
        <div className="flex items-start gap-2.5">
          <Avatar className="h-8 w-8 rounded-lg bg-[#1565C01A]">
            <AvatarFallback className="rounded-lg bg-[#1565C01A] text-[12px] font-semibold text-[#1F1E1F] dark:text-white">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-semibold leading-none text-[#1F1E1F] dark:text-white">
              {details.username}
            </p>

            <UserStatusBadge status={details.status} />
          </div>
        </div>

        {/* Right */}
        <Button
          type="button"
          className="h-auto rounded-md bg-[#EAEEF3] px-4 py-2 text-[11px] font-semibold text-[#DC2626] shadow-none hover:bg-[#E2E8F0] dark:bg-[#1F2937] dark:text-[#F87171]"
        >
          Deactivate Account
        </Button>
      </div>
    </div>
  )
}
