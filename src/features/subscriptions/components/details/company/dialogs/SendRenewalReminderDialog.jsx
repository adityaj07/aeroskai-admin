import { format, parse, isValid } from 'date-fns'
import { useEffect, useState } from 'react'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { SubscriptionDatePickerField } from '../SubscriptionDatePickerField'

const parseDateInput = (value) => {
  const parsedDate = parse(value, 'dd/MM/yyyy', new Date())
  return isValid(parsedDate) ? parsedDate : undefined
}

const formatExpiryForMessage = (value) => {
  if (!value) return ''
  return format(value, 'MMM d, yyyy')
}

const replaceExpiryDateInMessage = (message, formattedDate) => {
  if (!formattedDate) return message

  const pattern = /(expire on\s+)([^\n.]+)(\.?)/i
  if (!pattern.test(message)) return message

  return message.replace(pattern, `$1${formattedDate}$3`)
}

export const SendRenewalReminderDialog = ({ open, onClose, data }) => {
  const [expiryDate, setExpiryDate] = useState(parseDateInput(data.expiryDate))
  const [message, setMessage] = useState(data.message)

  useEffect(() => {
    if (!open) return

    const nextDate = parseDateInput(data.expiryDate)
    setExpiryDate(nextDate)
    setMessage(replaceExpiryDateInMessage(data.message, formatExpiryForMessage(nextDate)))
  }, [data.expiryDate, data.message, open])

  useEffect(() => {
    if (!open) return
    setMessage((previous) =>
      replaceExpiryDateInMessage(previous, formatExpiryForMessage(expiryDate))
    )
  }, [expiryDate, open])

  return (
    <BaseDialog
      open={open}
      title="Send Renewal Reminder"
      onClose={onClose}
      widthClassName="max-w-[640px]"
    >
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>
          <Input value={data.to} readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>
          <Input value={data.subject} readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
            Expiry Date (for message body)
          </p>
          <SubscriptionDatePickerField value={expiryDate} onChange={setExpiryDate} />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>
          <Textarea
            rows={12}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="max-h-65 overflow-y-auto bg-[#F7F9F9] text-xs dark:bg-white/5"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            className="h-10 bg-[#EAEEF3] dark:text-[#0C1014]"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button type="button" className="h-10 bg-[#1565C0] text-white hover:bg-[#0F54A1]">
            Send Reminder
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}
