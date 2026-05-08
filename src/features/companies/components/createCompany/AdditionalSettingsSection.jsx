import verifiedBadgeSmall from '@/assets/images/Verfied Badge Small.svg'
import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

export const AdditionalSettingsSection = ({ form }) => {
  return (
    <AdminSectionCard title="Additional Settings" contentClassName="space-y-3">
      <FormField
        control={form.control}
        name="markFoundingCompany"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-start gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-0.5 data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0]"
                />
              </FormControl>
              <div>
                <p className="inline-flex items-center gap-1 text-[13px] text-[#0C1014] dark:text-white">
                  Mark as Founding Company
                  <img src={verifiedBadgeSmall} alt="Verified" className="h-3.5" />
                </p>
                <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">Displays a badge on profile and posts</p>
              </div>
            </div>
            <FormMessage>{form.formState.errors.markFoundingCompany?.message}</FormMessage>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="grantFreeAccess"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-start gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-0.5 data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0]"
                />
              </FormControl>
              <div>
                <p className="text-[13px] text-[#0C1014] dark:text-white">Grant free access</p>
                <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">Bypass subscription requirements</p>
              </div>
            </div>
            <FormMessage>{form.formState.errors.grantFreeAccess?.message}</FormMessage>
          </FormItem>
        )}
      />
    </AdminSectionCard>
  )
}
