import { Calendar01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { format } from 'date-fns'

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { inputClassName } from './formStyles'

export const DatePickerField = ({ value, onChange, placeholder = 'dd/mm/yyyy' }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className={`${inputClassName} flex w-full items-center justify-between px-3 text-left`}>
          <span>{value ? format(value, 'dd/MM/yyyy') : placeholder}</span>
          <HugeiconsIcon icon={Calendar01Icon} size={14} className="text-[#6F7680]" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar mode="single" selected={value} onSelect={(date) => date && onChange(date)} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
