import verifiedBadgeSmall from '@/assets/images/Verfied Badge Small.svg'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

export const AdditionalSettingsSection = ({ form }) => {
  return (
    <AdminSectionCard title="Additional Settings" contentClassName="space-y-4">
      <FormField
        control={form.control}
        name="markFoundingCompany"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-start gap-3 bg-transparent">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-[2px] h-4 w-4 shrink-0 border-[#D6DAE0] data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0] dark:border-white/20"
                />
              </FormControl>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <p className="text-[12px] font-medium text-[#0C1014] dark:text-white sm:text-[13px] lg:text-[14px]">
                    Mark as Founding Company
                  </p>

                  <img src={verifiedBadgeSmall} alt="Verified" className="h-3.5 w-auto shrink-0" />
                </div>

                <p className="mt-1 text-[11px] leading-relaxed text-[#6F7680] dark:text-[#A9B0BA] sm:text-[12px]">
                  Displays a badge on profile and posts
                </p>
              </div>
            </div>

            <FormMessage className="text-xs text-[#F43F5E]">
              {form.formState.errors.markFoundingCompany?.message}
            </FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="grantFreeAccess"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-start gap-3 bg-transparent">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-[2px] h-4 w-4 shrink-0 border-[#D6DAE0] data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0] dark:border-white/20"
                />
              </FormControl>

              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-medium text-[#0C1014] dark:text-white sm:text-[13px] lg:text-[14px]">
                  Grant free access
                </p>

                <p className="mt-1 text-[11px] leading-relaxed text-[#6F7680] dark:text-[#A9B0BA] sm:text-[12px]">
                  Bypass subscription requirements
                </p>
              </div>
            </div>

            <FormMessage className="text-xs text-[#F43F5E]">
              {form.formState.errors.grantFreeAccess?.message}
            </FormMessage>
          </FormItem>
        )}
      />
    </AdminSectionCard>
  )
}
