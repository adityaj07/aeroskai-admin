import { Add01Icon, Image01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { RequiredLabel } from './RequiredLabel'
import { inputClassName } from './formStyles'
import { cn } from '@/lib/utils'

export const selectClassName = cn(
  'h-10 w-full rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] px-3 text-[13px] text-[#1F1E1F]',
  'placeholder:text-[#6F7680]',
  'dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD]',
  'focus:ring-0 focus:outline-none'
)

export const CompanyDetailsSection = ({ form, logoFileName, onOpenLogoDialog }) => {
  return (
    <AdminSectionCard title="Company Details" contentClassName="space-y-4">
      <div>
        <p className="mb-2 text-[13px] font-semibold text-[#0C1014] dark:text-white">
          Logo (optional)
        </p>
        <button
          type="button"
          onClick={onOpenLogoDialog}
          className="inline-flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-xl border border-dashed border-[#D6DAE0] bg-[#F7F9F9] text-[#6F7680] dark:border-white/15 dark:bg-white/5"
        >
          <HugeiconsIcon icon={logoFileName ? Image01Icon : Add01Icon} size={18} />
        </button>
        {logoFileName && (
          <p className="mt-2 text-xs text-[#6F7680] dark:text-[#A9B0BA]">{logoFileName}</p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Business Name</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter business name" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.businessName?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="businessWebsite"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Business Website</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter business website" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.businessWebsite?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Industry / Sector</RequiredLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="mt-2 h-10 w-full justify-between rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] px-3 py-[9px] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="charter">Charter & Private Aviation</SelectItem>
                    <SelectItem value="cargo">Cargo Airline</SelectItem>
                    <SelectItem value="commercial">Commercial Airline</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{form.formState.errors.industry?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companySize"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Company Size</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter company size" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.companySize?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>
    </AdminSectionCard>
  )
}
