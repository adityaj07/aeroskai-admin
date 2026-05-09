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
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>
          <Input value={data.to} readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Email type</p>
          <RadioGroup value={type} onValueChange={setType} className="space-y-1.5">
            {emailTypes.map((emailType) => (
              <label key={emailType.value} className="flex items-center gap-2 text-xs text-[#0C1014] dark:text-white">
                <RadioGroupItem value={emailType.value} />
                {emailType.label}
              </label>
            ))}
          </RadioGroup>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>
          <Input value={data.subject} readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>
          <Textarea
            rows={10}
            defaultValue={data.message}
            className="max-h-65 overflow-y-auto bg-[#F7F9F9] text-xs dark:bg-white/5"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button type="button" variant="secondary" className="h-10 bg-[#EAEEF3]" onClick={onClose}>
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
