import { parse, isValid } from 'date-fns'
import { useState } from 'react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

import { SubscriptionDatePickerField } from './SubscriptionDatePickerField'

const parseDateInput = (value) => {
  const parsedDate = parse(value, 'dd/MM/yyyy', new Date())
  return isValid(parsedDate) ? parsedDate : undefined
}

export const UpdateCompanySubscriptionCard = ({ subscription }) => {
  const [form, setForm] = useState({
    seats: String(subscription.seats),
    startDate: parseDateInput(subscription.startDateInput),
    endDate: parseDateInput(subscription.endDateInput),
    paymentReference: subscription.paymentReference,
    freeAccessOverride: false,
  })

  return (
    <AdminSectionCard title="Update Subscription Details" contentClassName="space-y-3">
      <div>
        <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Number of Seats</p>
        <Input
          value={form.seats}
          onChange={(event) => setForm((prev) => ({ ...prev, seats: event.target.value }))}
          className="sm:placeholder:text-[13px]] mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px]"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">
            Subscription Start Date
          </p>
          <SubscriptionDatePickerField
            value={form.startDate}
            onChange={(date) => setForm((prev) => ({ ...prev, startDate: date }))}
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">
            Subscription End Date
          </p>
          <SubscriptionDatePickerField
            value={form.endDate}
            onChange={(date) => setForm((prev) => ({ ...prev, endDate: date }))}
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">
          Payment Reference / PO Number (internal)
        </p>
        <Input
          value={form.paymentReference}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, paymentReference: event.target.value }))
          }
          className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
        />
      </div>

      <div className="flex items-center gap-2 pt-1">
        <Switch
          checked={form.freeAccessOverride}
          onCheckedChange={(checked) =>
            setForm((prev) => ({ ...prev, freeAccessOverride: checked }))
          }
          className="data-[state=checked]:bg-[#1565C0] dark:data-[state=checked]:bg-[#1565C0]"
        />
        <p className="text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">
          Free Access Override - bypasses subscription checks entirely
        </p>
      </div>

      <div className="max-sm:flex-col flex justify-end gap-2 pt-1">
        <Button
          type="button"
          variant="secondary"
          className="max-sm:max-w-none h-10 w-full max-w-[140px] cursor-pointer bg-[#EAEEF3] dark:bg-white/10"
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="max-sm:max-w-none h-10 w-full max-w-[140px] cursor-pointer bg-[#1565C0] text-white hover:bg-[#0F54A1]"
        >
          Save Subscription
        </Button>
      </div>
    </AdminSectionCard>
  )
}
