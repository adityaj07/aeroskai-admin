import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const selectTriggerClassName =
  'h-[44px] min-w-[133px] rounded-[8px] border border-[#F3F4F6] bg-white px-4 py-[11px] text-[13px] font-semibold text-[#6F7680] shadow-none ring-0 outline-none focus:ring-0 focus:outline-none focus:border-[#1565C0]/40 dark:border-white/10 dark:bg-transparent dark:text-[#A9B0BA]'

export const ReportsToolbar = ({
  search,
  onSearchChange,
  contentType,
  contentTypes = [],
  onContentTypeChange,
  duration,
  durations = [],
  onDurationChange,
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
          placeholder="Search by username, content, or report ID"
          className="h-11 w-full rounded-md border border-[#F3F4F6] bg-white pl-9 pr-3 text-sm text-[#0C1014] placeholder:text-[#6F7680] focus-visible:border-[#1565C0]/40 focus-visible:ring-0 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-[#A2AAB4]"
        />
      </div>

      <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-end">
        <Select value={contentType} onValueChange={onContentTypeChange}>
          <SelectTrigger className={selectTriggerClassName}>
            <SelectValue placeholder="Content Type" />
          </SelectTrigger>
          <SelectContent align="end">
            {contentTypes.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={duration} onValueChange={onDurationChange}>
          <SelectTrigger className={selectTriggerClassName}>
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
      </div>
    </div>
  )
}
