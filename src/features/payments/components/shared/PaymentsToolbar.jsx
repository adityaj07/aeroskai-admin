import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const selectTriggerClassName =
  'h-11 min-w-[77px] rounded-[8px] border border-[#E2E8F0] bg-white px-4 py-[11px] text-[13px] font-semibold text-[#6F7680] dark:border-white/10 dark:bg-transparent dark:text-[#A9B0BA]'

export const PaymentsToolbar = ({
  search,
  onSearchChange,
  placeholder = 'Search payments...',
  status,
  statuses = [],
  onStatusChange,
  duration,
  durations = [],
  onDurationChange,
  onExportCsv,
  showRecordPayment = false,
  onRecordPayment,
}) => {
  return (
    <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
      <div className="relative w-full xl:max-w-[420px]">
        <HugeiconsIcon
          icon={Search01Icon}
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6F7680]"
          strokeWidth={1.8}
        />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={placeholder}
          className="h-11 w-full rounded-md border border-[#F3F4F6] bg-white pl-9 pr-3 text-sm text-[#0C1014] placeholder:text-[#6F7680] focus-visible:border-[#1565C0]/40 focus-visible:ring-0 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-[#A2AAB4]"
        />
      </div>

      <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-end">
        <Select value={status} onValueChange={onStatusChange}>
          <SelectTrigger className={`${selectTriggerClassName} w-full sm:w-auto`}>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent align="end">
            {statuses.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={duration} onValueChange={onDurationChange}>
          <SelectTrigger className={`${selectTriggerClassName} w-full sm:w-auto`}>
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent align="end">
            {durations.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          type="button"
          onClick={onExportCsv}
          className="py-5.5 col-span-2 h-11 w-full rounded-[8px] bg-[#EAEEF3] px-4 text-[13px] font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white dark:hover:bg-white/15 sm:col-auto sm:h-9 sm:w-auto sm:rounded-md"
        >
          Export CSV
        </Button>

        {showRecordPayment && (
          <Button
            type="button"
            onClick={onRecordPayment}
            className="py-5.5 col-span-2 h-11 w-full rounded-[8px] bg-[#1565C0] px-4 text-[13px] font-semibold text-white hover:bg-[#0F54A1] sm:col-auto sm:h-9 sm:w-auto sm:rounded-md"
          >
            Record Payment
          </Button>
        )}
      </div>
    </div>
  )
}
