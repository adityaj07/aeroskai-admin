import { useState } from 'react'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

const emailTypes = [
  { value: 'pricing', label: 'Pricing & Plan Details' },
  { value: 'invoice', label: 'Invoice / Purchase Order' },
  { value: 'renewal', label: 'Renewal Reminder' },
  { value: 'update', label: 'Subscription Update' },
]

export const SendInvoiceEmailDialog = ({ open, onClose, data }) => {
  const [type, setType] = useState('invoice')

  return (
    <BaseDialog
      open={open}
      title="Send Subscription Email"
      onClose={onClose}
      widthClassName="max-w-[640px]"
    >
      <div className="space-y-3">
        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>
          <Input
            value={data.to}
            readOnly
            className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Email type</p>
          <RadioGroup value={type} onValueChange={setType} className="space-y-1.5">
            {emailTypes.map((emailType) => (
              <label
                key={emailType.value}
                className="flex items-center gap-2 text-xs text-[#0C1014] dark:text-white"
              >
                <RadioGroupItem value={emailType.value} />
                {emailType.label}
              </label>
            ))}
          </RadioGroup>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>
          <Input
            value={data.subject}
            readOnly
            className="h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>
          <Textarea
            rows={10}
            defaultValue={data.message}
            className="max-h-65 overflow-y-auto rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-xs text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            className="h-10 cursor-pointer bg-[#EAEEF3] dark:bg-white/10"
            onClick={onClose}
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
