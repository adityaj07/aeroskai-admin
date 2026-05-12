import { Tick02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Button } from '@/components/ui/button'

const markerClassMap = {
  complete: 'border-[#16A34A] text-[#16A34A]',
  pending: 'border-[#F59E0B] text-[#F59E0B]',
  inactive: 'border-[#D1D5DB] text-[#D1D5DB] dark:border-white/15 dark:text-white/25',
}

export const CompanyRenewalWorkflowCard = ({ workflow }) => {
  return (
    <AdminSectionCard title="B2B Renewal Workflow" contentClassName="space-y-4">
      {workflow.map((step, index) => (
        <div key={step.title} className="relative pl-7">
          {index !== workflow.length - 1 && (
            <div className="absolute left-[8px] top-5 h-[calc(100%+6px)] w-px border-l border-dashed border-[#D1D5DB] dark:border-white/15" />
          )}

          <div
            className={`absolute left-0 top-0 flex size-[17px] items-center justify-center rounded-full border ${markerClassMap[step.state]}`}
          >
            {step.state === 'complete' ? <HugeiconsIcon icon={Tick02Icon} size={11} /> : null}
          </div>

          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-semibold text-[#0C1014] dark:text-white">{step.title}</p>

            {step.cta && (
              <Button
                type="button"
                variant="secondary"
                className="h-8 shrink-0 cursor-pointer bg-[#EAEEF3] px-3 text-[11px] text-[#16A34A] hover:bg-[#DFE5EB] dark:bg-[#14171A] dark:text-[#16A34A] dark:hover:bg-[#1A1E22]"
              >
                {step.cta}
              </Button>
            )}
          </div>

          <p className="mt-0.5 text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">
            {step.description}
          </p>
          {step.note && <p className="mt-1 text-[11px] text-[#16A34A]">{step.note}</p>}
        </div>
      ))}
    </AdminSectionCard>
  )
}
