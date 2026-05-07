import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'

export function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-2', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'space-y-2',
        caption: 'flex justify-center pt-1 relative items-center text-xs font-medium',
        caption_label: 'text-xs font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button:
          'h-6 w-6 bg-transparent p-0 text-[#6F7680] hover:text-[#0C1014] dark:hover:text-white',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-[#6F7680] rounded-md w-8 text-[0.7rem] font-normal',
        row: 'flex w-full mt-1',
        cell: 'h-8 w-8 text-center text-xs p-0 relative',
        day: 'h-8 w-8 p-0 font-normal rounded-md hover:bg-[#F3F4F6] dark:hover:bg-white/10',
        day_selected:
          'bg-[#1565C0] text-white hover:bg-[#1565C0] hover:text-white focus:bg-[#1565C0] focus:text-white',
        day_today: 'bg-[#1565C01A] text-[#1565C0] dark:bg-[#1565C033] dark:text-[#8DBEFF]',
        day_outside: 'text-[#A9B0BA] opacity-50',
        day_disabled: 'text-[#A9B0BA] opacity-50',
        day_range_middle: 'aria-selected:bg-[#1565C01A] aria-selected:text-[#1565C0]',
        day_hidden: 'invisible',
        ...classNames,
      }}
      {...props}
    />
  )
}
