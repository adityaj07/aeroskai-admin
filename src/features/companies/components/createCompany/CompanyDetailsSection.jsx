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

export const CompanyDetailsSection = ({ form, logoFileName, onOpenLogoDialog }) => {
  return (
    <AdminSectionCard title="Company Details" contentClassName="space-y-4">
      <div>
        <p className="mb-2 text-[13px] font-semibold text-[#0C1014] dark:text-white">Logo (optional)</p>
        <button
          type="button"
          onClick={onOpenLogoDialog}
          className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-xl border border-dashed border-[#D6DAE0] bg-[#F7F9F9] text-[#6F7680] dark:border-white/15 dark:bg-white/5"
        >
          <HugeiconsIcon icon={logoFileName ? Image01Icon : Add01Icon} size={18} />
        </button>
        {logoFileName && <p className="mt-2 text-xs text-[#6F7680] dark:text-[#A9B0BA]">{logoFileName}</p>}
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
                  <SelectTrigger className={`${inputClassName} h-10 w-full px-3`}>
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
