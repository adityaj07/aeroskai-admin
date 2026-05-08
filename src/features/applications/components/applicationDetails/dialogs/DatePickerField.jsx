import { Calendar01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { format } from 'date-fns'

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export const DatePickerField = ({ value, onChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex h-10 w-full items-center justify-between rounded-md border border-[#F3F4F6] bg-[#F7F9F9] px-3 text-left text-xs text-[#1F1E1F] transition-colors hover:bg-[#F3F4F6] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          {format(value, 'dd-MM-yyyy')}
          <HugeiconsIcon icon={Calendar01Icon} size={14} className="text-[#6F7680]" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => date && onChange(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePickerField
