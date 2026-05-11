import { ArrowDown01Icon, ArrowUp01Icon, UserCircleIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

const AccountItem = ({ item, expanded, onToggle }) => {
  return (
    <div className="rounded-lg border border-[#EEF1F4] bg-white px-3 py-3 dark:border-white/10 dark:bg-[#15181C]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-2 text-left"
      >
        <div>
          <p className="text-sm font-medium text-[#0C1014] dark:text-white">{item.username}</p>

          <p className="mt-0.5 text-xs text-[#6F7680] dark:text-[#A9B0BA]">{item.email}</p>
        </div>

        <HugeiconsIcon
          icon={expanded ? ArrowUp01Icon : ArrowDown01Icon}
          size={16}
          className="mt-1 text-[#8A93A0]"
        />
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 border-t border-[#EEF1F4] pt-3 dark:border-white/10">
          <div>
            <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">Reason</p>

            <p className="mt-1 text-sm text-[#0C1014] dark:text-white">{item.reason}</p>
          </div>

          {item.notes && (
            <div>
              <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">Additional Notes</p>

              <p className="mt-1 text-sm text-[#0C1014] dark:text-white">{item.notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#D7DCE2] bg-[#F9FBFC] px-6 py-10 text-center dark:border-white/10 dark:bg-[#15181C]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAEEF3] dark:bg-white/10">
        <HugeiconsIcon
          icon={UserCircleIcon}
          size={24}
          className="text-[#8A93A0] dark:text-[#A9B0BA]"
        />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-[#0C1014] dark:text-white">
        Reporting information unavailable
      </h3>

      <p className="mt-1 max-w-[280px] text-xs leading-relaxed text-[#6F7680] dark:text-[#A9B0BA]">
        We couldn't load the reporting account details at the moment. Please try again later or
        refresh the page.
      </p>
    </div>
  )
}

export const ReportingAccountsCard = ({ accounts = [] }) => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <AdminSectionCard title="Reporting Account Information" contentClassName="space-y-2.5">
      {!accounts.length ? (
        <EmptyState />
      ) : (
        accounts.map((account, index) => {
          const expanded = expandedIndex === index

          return (
            <AccountItem
              key={`${account.username}-${account.email}`}
              item={account}
              expanded={expanded}
              onToggle={() => setExpandedIndex(expanded ? -1 : index)}
            />
          )
        })
      )}
    </AdminSectionCard>
  )
}
