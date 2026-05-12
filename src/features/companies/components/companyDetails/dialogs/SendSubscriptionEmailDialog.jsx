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
          <Input
            value={toEmail}
            readOnly
            className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Email type</p>
          <RadioGroup value={type} onValueChange={setType} className="space-y-1">
            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem
                value="pricing"
                className="border-[#D6DAE0] text-[#1565C0] data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0]"
              />
              Pricing & Plan Details
            </label>

            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem
                value="invoice"
                className="border-[#D6DAE0] text-[#1565C0] data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0]"
              />
              Invoice / Purchase Order
            </label>

            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem
                value="renewal"
                className="border-[#D6DAE0] text-[#1565C0] data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0]"
              />
              Renewal Reminder
            </label>

            <label className="flex items-center gap-2 text-xs">
              <RadioGroupItem
                value="update"
                className="border-[#D6DAE0] text-[#1565C0] data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0]"
              />
              Subscription Update
            </label>
          </RadioGroup>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>
          <Input
            value="Your Aeroskai Subscription Details"
            readOnly
            className="h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>
          <Textarea
            rows={6}
            defaultValue={`Dear ${toEmail},\n\nYour current subscription details are as follows:\n\nPlan: Pro\nDuration: Jan 1, 2025 - Dec 31, 2025\n\nBest regards,\nAeroskai Team`}
            className="max-h-45 overflow-y-auto rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-xs text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:text-[14px] sm:placeholder:text-[13px] md:max-h-60"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="h-10 cursor-pointer bg-[#EAEEF3] dark:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="h-10 cursor-pointer bg-[#1565C0] text-white hover:bg-[#0F54A1]"
          >
            Send Email
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}
