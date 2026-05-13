import { Building01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import companyPlaceholder from '@/assets/images/company-placeholder.svg'
import { StatusBadge } from '@/components/shared/app/StatusBadge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const ApplicationDetailHeader = ({ details, onReject, onRequestInfo, onApprove }) => {
  const initials =
    details.companyName
      ?.split(' ')
      ?.map((name) => name.charAt(0).toUpperCase())
      ?.slice(0, 2)
      ?.join('') || 'A'

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-transparent px-4 py-4 sm:px-5 sm:py-5 xl:flex-row xl:items-center xl:justify-between">
      {/* Left Section */}
      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
        <Avatar className="h-12 w-12 shrink-0 rounded-[14px] border border-[#E5E7EB] bg-[#E7EEF8] dark:border-[#25292E] dark:bg-[#1F2937] sm:h-14 sm:w-14">
          <AvatarImage
            src={companyPlaceholder}
            alt={details.logoAlt ?? `${details.companyName} logo`}
          />

          <AvatarFallback className="rounded-[14px] bg-[#E7EEF8] text-[16px] font-semibold text-[#1565C0] dark:bg-[#1F2937] dark:text-[#8DBEFF]">
            <HugeiconsIcon icon={Building01Icon} size={18} />
            <span className="sr-only">{initials}</span>
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <p className="truncate text-[18px] font-semibold text-[#1F1E1F] dark:text-white sm:text-[20px] lg:text-[22px]">
            {details.companyName}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <StatusBadge status={details.status} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-wrap gap-2 xl:w-auto xl:justify-end">
        <Button
          type="button"
          onClick={() => onReject && onReject()}
          className={cn(
            'h-10 w-full cursor-pointer  rounded-md px-4 text-[12px] font-semibold shadow-none transition-colors sm:h-11 sm:flex-1 sm:text-[13px] xl:w-auto xl:flex-none',
            'bg-[#F1F5F9] text-[#DC2626] hover:bg-[#E2E8F0]',
            'dark:bg-[#14171A] dark:text-[#F87171] dark:hover:bg-white/10'
          )}
        >
          Reject Application
        </Button>

        <Button
          type="button"
          onClick={() => onRequestInfo && onRequestInfo()}
          className={cn(
            'h-10 w-full cursor-pointer rounded-md px-4 text-[12px] font-semibold shadow-none transition-colors sm:h-11 sm:flex-1 sm:text-[13px] xl:w-auto xl:flex-none',
            'bg-[#F1F5F9] text-[#0C1014] hover:bg-[#E2E8F0]',
            'dark:bg-[#14171A] dark:text-white dark:hover:bg-white/10'
          )}
        >
          <span className="truncate">Request More Information</span>
        </Button>

        <Button
          type="button"
          onClick={() => onApprove && onApprove()}
          className={cn(
            'h-10 w-full cursor-pointer rounded-md px-4 text-[12px] font-semibold text-white transition-colors sm:h-11 sm:flex-1 sm:text-[13px] xl:w-auto xl:flex-none',
            'bg-[#1565C0] hover:bg-[#0F54A1]'
          )}
        >
          <span className="truncate">Approve Application</span>
        </Button>
      </div>
    </div>
  )
}

export default ApplicationDetailHeader
