import { Building01Icon, Star } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { CompanyStatusBadge } from '../CompanyStatusBadge'

export const CompanyHeaderBanner = ({ details }) => {
  return (
    <div className="rounded-2xl bg-[#1565C00D] p-4 dark:bg-[#1565C01A]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-[#E7EEF8] p-2 text-[#1565C0] dark:bg-[#1F2937]">
            <HugeiconsIcon icon={Building01Icon} size={30} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-[20px] font-semibold text-[#1F1E1F] dark:text-white">
              {details.username}
            </p>
            <p className="text-[13px] text-[#6F7680] dark:text-[#A9B0BA]">{details.company}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <CompanyStatusBadge status={details.status} />
          {details.foundingCompany && (
            <div className="flex items-center justify-center gap-1 rounded-lg bg-[#1565C01A] px-2 py-1 text-[12px] text-[#1565C0]">
              <HugeiconsIcon icon={Star} strokeWidth={2} className="h-[12px]" />
              Founding Company
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
