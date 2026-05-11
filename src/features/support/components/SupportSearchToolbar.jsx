import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Input } from '@/components/ui/input'

export const SupportSearchToolbar = ({
  search,
  onSearchChange,
  placeholder = 'Search by name...',
}) => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <HugeiconsIcon
          icon={Search01Icon}
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[#6F7680] dark:text-[#A2AAB4]"
          strokeWidth={1.8}
        />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={placeholder}
          className="
            h-10
            w-full
            min-w-0
            rounded-md
            border
            border-[#F3F4F6]
            bg-white
            pl-9
            pr-3
            text-sm
            text-[#0C1014]
            placeholder:text-[#6F7680]
            focus-visible:border-[#1565C0]/40
            focus-visible:ring-0
            dark:border-white/10
            dark:bg-transparent
            dark:text-white
            dark:placeholder:text-[#A2AAB4]
          "
        />
      </div>
    </div>
  )
}
