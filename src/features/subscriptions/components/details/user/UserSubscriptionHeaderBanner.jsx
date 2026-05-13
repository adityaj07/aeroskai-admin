import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { StatusBadge } from '@/components/shared/app/StatusBadge'

export const UserSubscriptionHeaderBanner = ({ details }) => {
  const initials = details.username?.replace('@', '').slice(0, 2).toUpperCase() || 'US'

  return (
    <div className="rounded-2xl bg-[#1565C00D] p-4 dark:bg-[#1565C01A]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="size-11 rounded-xl bg-[#E7EEF8]">
            <AvatarFallback className="rounded-xl bg-[#E7EEF8] text-sm font-semibold text-[#1565C0]">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[20px] font-semibold text-[#1F1E1F] dark:text-white">
              {details.username}
            </p>
            <p className="text-[13px] text-[#6F7680] dark:text-[#A9B0BA]">{details.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={details.status} />
        </div>
      </div>
    </div>
  )
}
