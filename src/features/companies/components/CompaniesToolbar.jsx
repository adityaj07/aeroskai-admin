import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const CompaniesToolbar = ({ search, onSearchChange, onCreateCompany }) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full max-w-[420px]">
        <HugeiconsIcon
          icon={Search01Icon}
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6F7680]"
          strokeWidth={1.8}
        />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by company name, username, or email"
          className="h-11 w-full rounded-md border border-[#F3F4F6] bg-white pl-9 pr-3 text-sm text-[#0C1014] placeholder:text-[#6F7680] focus-visible:border-[#1565C0]/40 focus-visible:ring-0 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-[#A2AAB4]"
        />
      </div>

      <Button
        type="button"
        onClick={onCreateCompany}
        className="h-10 rounded-md bg-[#1565C0] px-4 text-xs font-semibold text-white hover:bg-[#0F4DA0] dark:bg-[#1565C0] dark:hover:bg-[#0F4DA0]"
      >
        Create Company Account
      </Button>
    </div>
  )
}
