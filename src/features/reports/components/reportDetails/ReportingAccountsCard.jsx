import { ArrowDown01Icon, ArrowUp01Icon, UserCircleIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

const AccountItem = ({ item, expanded, onToggle }) => {
  return (
    <div className="w-full rounded-lg bg-transparent px-3 py-3">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-3 text-left"
      >
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-medium text-[#0C1014] dark:text-white sm:text-sm">
            {item.username}
          </p>

          <p className="mt-0.5 break-all text-[11px] text-[#6F7680] dark:text-[#A9B0BA] sm:text-xs">
            {item.email}
          </p>
        </div>

        <HugeiconsIcon
          icon={expanded ? ArrowUp01Icon : ArrowDown01Icon}
          size={16}
          className="mt-1 shrink-0 text-[#8A93A0]"
        />
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 py-3">
          <div>
            <p className="text-[11px] text-[#6F7680] dark:text-[#A9B0BA] sm:text-xs">Reason</p>

            <p className="mt-1 text-[13px] text-[#0C1014] dark:text-white sm:text-sm">
              {item.reason}
            </p>
          </div>

          {item.notes && (
            <div>
              <p className="text-[11px] text-[#6F7680] dark:text-[#A9B0BA] sm:text-xs">
                Additional Notes
              </p>

              <p className="mt-1 whitespace-pre-wrap text-[13px] leading-relaxed text-[#0C1014] dark:text-white sm:text-sm">
                {item.notes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#D7DCE2] bg-[#F9FBFC] px-6 py-10 text-center dark:border-[#25292E] dark:bg-[#15181C]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAEEF3] dark:bg-white/10">
        <HugeiconsIcon
          icon={UserCircleIcon}
          size={24}
          className="text-[#8A93A0] dark:text-[#A9B0BA]"
        />
      </div>

      <h3 className="mt-4 text-[13px] font-semibold text-[#0C1014] dark:text-white sm:text-sm">
        Reporting information unavailable
      </h3>

      <p className="mt-1 max-w-[280px] text-[11px] leading-relaxed text-[#6F7680] dark:text-[#A9B0BA] sm:text-xs">
        We couldn&apos;t load the reporting account details at the moment. Please try again later or
        refresh the page.
      </p>
    </div>
  )
}

export const ReportingAccountsCard = ({ accounts = [] }) => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <AdminSectionCard title="Reporting Account Information" contentClassName="space-y-0">
      {!accounts.length ? (
        <EmptyState />
      ) : (
        accounts.map((account, index) => {
          const expanded = expandedIndex === index
          const isLast = index === accounts.length - 1

          return (
            <div
              key={`${account.username}-${account.email}`}
              className={!isLast ? 'border-b border-[#EEF1F4] dark:border-[#25292E]' : ''}
            >
              <AccountItem
                item={account}
                expanded={expanded}
                onToggle={() => setExpandedIndex(expanded ? -1 : index)}
              />
            </div>
          )
        })
      )}
    </AdminSectionCard>
  )
}
