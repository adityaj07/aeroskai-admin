import { Calendar01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { format } from 'date-fns'

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export const SubscriptionDatePickerField = ({ value, onChange, placeholder = 'dd/mm/yyyy' }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex h-10 w-full items-center justify-between rounded-md border border-[#E5E7EB] bg-[#F7F9F9] px-3 text-left text-sm text-[#0C1014] dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <span>{value ? format(value, 'dd/MM/yyyy') : placeholder}</span>
          <HugeiconsIcon icon={Calendar01Icon} size={14} className="text-[#6F7680] dark:text-[#A9B0BA]" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] max-w-[min(92vw,360px)] p-0"
      >
        <Calendar mode="single" selected={value} onSelect={(date) => date && onChange(date)} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
