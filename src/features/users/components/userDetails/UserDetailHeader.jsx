import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { StatusBadge } from '@/components/shared/app/StatusBadge'

export const UserDetailHeader = ({ details, onToggleStatus }) => {
  const status = details.status
  const initials =
    details.fullName
      ?.split(' ')
      ?.map((name) => name.charAt(0).toUpperCase())
      ?.slice(0, 2)
      ?.join('') || 'U'

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-transparent px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-5">
      <div className="flex min-w-0 items-start gap-4 sm:gap-5">
        <Avatar className="h-11.5 w-11.5 shrink-0 rounded-[12px] bg-[#1565C01A]">
          <AvatarFallback className="rounded-[12px] bg-[#1565C01A] text-[20px] font-semibold text-[#1F1E1F] dark:text-white">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <p className="leading-5.5 truncate text-[20px] font-semibold text-[#1F1E1F] dark:text-white">
            {details.username}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <StatusBadge status={status} />
          </div>
        </div>
      </div>

      <Button
        type="button"
        onClick={() => onToggleStatus && onToggleStatus()}
        className={cn(
          'h-11 w-full cursor-pointer rounded-md px-4 py-3 text-[11px] font-semibold shadow-none transition-colors sm:w-auto sm:px-6 sm:py-4 sm:text-[13px] md:text-sm',
          status === 'Active'
            ? 'bg-[#F1F5F9] text-[#DC2626] hover:bg-[#E2E8F0] dark:bg-[#14171A] dark:text-[#F87171] dark:hover:bg-white/10'
            : 'bg-[#1565C0] text-white hover:bg-[#0F4C92] dark:bg-[#1565C0] dark:text-white'
        )}
      >
        {status === 'Active' ? 'Deactivate Account' : 'Activate Account'}
      </Button>
    </div>
  )
}
