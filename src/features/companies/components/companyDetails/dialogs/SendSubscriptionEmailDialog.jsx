import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { BaseDialog } from '@/components/shared/app/BaseDialog'

export const SendSubscriptionEmailDialog = ({ open, toEmail, onClose }) => {
  const [type, setType] = useState('pricing')

  return (
    <BaseDialog open={open} title="Send Subscription Email" onClose={onClose}>
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>
          <Input value={toEmail} readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Email type</p>
          <RadioGroup value={type} onValueChange={setType} className="space-y-1">
            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem value="pricing" /> Pricing & Plan Details
            </label>
            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem value="invoice" /> Invoice / Purchase Order
            </label>
            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem value="renewal" /> Renewal Reminder
            </label>
            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem value="update" /> Subscription Update
            </label>
          </RadioGroup>
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>
          <Input
            value="Your Aeroskai Subscription Details"
            readOnly
            className="h-10 bg-[#F7F9F9] dark:bg-white/5"
          />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>
          <Textarea
            rows={6}
            defaultValue={`Dear ${toEmail},\n\nYour current subscription details are as follows:\n\nPlan: Pro\nDuration: Jan 1, 2025 - Dec 31, 2025\n\nBest regards,\nAeroskai Team`}
            className="max-h-45 overflow-y-auto bg-[#F7F9F9] text-xs dark:bg-white/5 md:max-h-60"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="h-10 bg-[#EAEEF3] dark:bg-white/10"
          >
            Cancel
          </Button>
          <Button type="button" className="h-10 bg-[#1565C0] text-white hover:bg-[#0F54A1]">
            Send Email
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}
