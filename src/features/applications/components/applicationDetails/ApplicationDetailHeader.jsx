import { Building01Icon, Mail01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import companyPlaceholder from '@/assets/images/company-placeholder.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { ApplicationStatusBadge } from '../ApplicationStatusBadge'

export const ApplicationDetailHeader = ({ details, onReject, onRequestInfo, onApprove }) => {
  const initials =
    details.companyName
      ?.split(' ')
      ?.map((name) => name.charAt(0).toUpperCase())
      ?.slice(0, 2)
      ?.join('') || 'A'

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white px-5 py-5 dark:bg-[#121417] sm:flex-row sm:items-center sm:justify-between md:px-5">
      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
        <Avatar className="h-12 w-12 shrink-0 rounded-[14px] border border-[#E5E7EB] bg-[#E7EEF8] dark:border-[#25292E] dark:bg-[#1F2937]">
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
          <p className="truncate text-[20px] font-semibold text-[#1F1E1F] dark:text-white">
            {details.companyName}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <ApplicationStatusBadge status={details.status} />
          </div>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <Button
          type="button"
          onClick={() => onReject && onReject()}
          className={cn(
            'h-10 cursor-pointer rounded-md px-4 text-[11px] font-semibold shadow-none sm:px-5',
            'bg-[#F1F5F9] text-[#DC2626] hover:bg-[#E2E8F0] dark:bg-[#1F2937] dark:text-[#F87171]'
          )}
        >
          Reject Application
        </Button>
        <Button
          type="button"
          onClick={() => onRequestInfo && onRequestInfo()}
          className={cn(
            'h-10 cursor-pointer rounded-md px-4 text-[11px] font-semibold shadow-none sm:px-5',
            'bg-[#F1F5F9] text-[#0C1014] hover:bg-[#E2E8F0] dark:bg-[#1F2937] dark:text-white'
          )}
        >
          <span className="inline-flex items-center gap-2">
            <HugeiconsIcon icon={Mail01Icon} size={14} />
            Request More Information
          </span>
        </Button>
        <Button
          type="button"
          onClick={() => onApprove && onApprove()}
          className={cn(
            'h-10 cursor-pointer rounded-md px-4 text-[11px] font-semibold shadow-none sm:px-5',
            'bg-[#1565C0] text-white hover:bg-[#0F4C92] dark:bg-[#1565C0] dark:text-white'
          )}
        >
          <span className="inline-flex items-center gap-2">
            <HugeiconsIcon icon={Tick02Icon} size={14} />
            Approve Application
          </span>
        </Button>
      </div>
    </div>
  )
}

export default ApplicationDetailHeader
