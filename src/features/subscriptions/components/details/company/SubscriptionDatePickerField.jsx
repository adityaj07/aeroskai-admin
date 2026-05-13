import { Calendar01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { formatDate } from '@/utils/formatDate'

export const SubscriptionDatePickerField = ({
  value,
  onChange,
  placeholder = 'dd/mm/yyyy',
  triggerClassName,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'flex h-10 w-full cursor-pointer items-center justify-between rounded-md border border-[#E5E7EB] bg-[#F7F9F9] px-3 text-left text-sm text-[#0C1014] dark:border-[#25292E] dark:bg-white/5 dark:text-white',
            triggerClassName
          )}
        >
          <span>{value ? formatDate(value) : placeholder}</span>
          <HugeiconsIcon
            icon={Calendar01Icon}
            size={14}
            className="text-[#6F7680] dark:text-[#A9B0BA]"
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="start"
        sideOffset={8}
        collisionPadding={12}
        className="w-(--radix-popover-trigger-width) max-h-[calc(100dvh-8rem)] max-w-[min(92vw,360px)] overflow-y-auto p-0"
      >
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
