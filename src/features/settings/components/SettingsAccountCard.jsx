import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const inputBaseClass =
  'h-11 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] text-[14px] text-[#1F1E1F] placeholder:text-[#6F7680] focus-visible:ring-1 focus-visible:ring-[#1565C0] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] dark:focus-visible:ring-[#7DB3F2]'

export const SettingsAccountCard = ({ account, onOpenChangePassword }) => {
  return (
    <AdminSectionCard title="Account">
      <div className="space-y-4">
        {/* NAME */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-semibold text-[#0C1014] dark:text-white">Name</label>

          <Input readOnly value={account.name} className={`${inputBaseClass} cursor-default`} />
        </div>

        {/* EMAIL */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-semibold text-[#0C1014] dark:text-white">Email</label>

          <Input readOnly value={account.email} className={`${inputBaseClass} cursor-default`} />
        </div>

        {/* PASSWORD */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-semibold text-[#0C1014] dark:text-white">
            Password
          </label>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              readOnly
              value="********"
              className={`${inputBaseClass} cursor-default sm:flex-1`}
            />

            <Button
              type="button"
              variant="secondary"
              onClick={onOpenChangePassword}
              className="h-11 rounded-lg border border-[#F3F4F6] bg-[#F3F4F6] px-6 text-[13px] font-semibold text-[#1F1E1F] transition-colors hover:bg-[#E7EAEE] dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </AdminSectionCard>
  )
}
