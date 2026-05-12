import { useState } from 'react'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SubscriptionDatePickerField } from '@/features/subscriptions/components/details/company/SubscriptionDatePickerField'

export const ManageSubscriptionDialog = ({ open, data, onClose }) => {
  const [startDate, setStartDate] = useState(new Date('2025-01-01'))
  const [endDate, setEndDate] = useState(new Date('2025-12-31'))

  return (
    <BaseDialog open={open} title="Manage Subscription" onClose={onClose}>
      <div className="space-y-4">
        <div className="rounded-lg bg-[#F7F9F9] p-3 dark:bg-white/5">
          <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">Current Subscription</p>
          <p className="text-2xl font-semibold text-[#0C1014] dark:text-white">
            {data.seats} Seats
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-[#6F7680] dark:text-[#A9B0BA]">
            <div>
              Start Date
              <br />
              {data.startDate}
            </div>
            <div>
              End Date
              <br />
              {data.endDate}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Price *</p>
            <Input value="$70.99" readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
              Number of Seats
            </p>
            <Input
              value={String(data.seats)}
              readOnly
              className="h-10 bg-[#F7F9F9] dark:bg-white/5"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                Start Date
              </p>
              <SubscriptionDatePickerField value={startDate} onChange={setStartDate} />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">End Date</p>
              <SubscriptionDatePickerField value={endDate} onChange={setEndDate} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="h-10 cursor-pointer border border-[#F3F4F6] bg-[#EAEEF3] text-sm text-[#1F1E1F] hover:bg-[#DEE5EC] dark:border-[#25292E] dark:bg-white/10 dark:text-white"
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="h-10 cursor-pointer bg-[#1565C0] text-sm text-white hover:bg-[#0F54A1]"
          >
            Save Subscription
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}
