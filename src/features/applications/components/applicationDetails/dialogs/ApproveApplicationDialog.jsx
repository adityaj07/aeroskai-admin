import { format } from 'date-fns'
import { useMemo, useState } from 'react'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import DatePickerField from './DatePickerField'

const BILLING_CYCLES = ['Monthly', 'Quarterly', 'Semi-Annual', 'Annual']

export const ApproveApplicationDialog = ({ open, application, onClose, onSubmit }) => {
  const [billingCycle, setBillingCycle] = useState('Monthly')
  const [startDate, setStartDate] = useState(new Date('2025-01-01'))
  const [endDate, setEndDate] = useState(new Date('2025-12-31'))
  const [sendBillingEmail, setSendBillingEmail] = useState(true)
  const [foundingCompanyBadge, setFoundingCompanyBadge] = useState(false)

  const contactName = useMemo(
    () =>
      application.primaryContact?.find((item) => item.label === 'Full Name')?.value ??
      application.company,
    [application.company, application.primaryContact]
  )

  const closeDialog = () => {
    onClose()
  }

  return (
    <BaseDialog
      open={open}
      title="Approve & send billing details"
      onClose={closeDialog}
      widthClassName="max-w-[620px]"
    >
      <div className="space-y-4">
        <div className="rounded-xl bg-[#F7F9F9] p-3 dark:bg-white/5">
          <p className="text-xs font-semibold text-[#0C1014] dark:text-white">
            {application.company}
          </p>
          <p className="mt-1 text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">{application.email}</p>
        </div>

        <div className="space-y-3">
          {/* Price */}
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Price *</p>

            <Input defaultValue="$70.99" className="h-10 bg-[#F7F9F9] text-sm dark:bg-white/5" />
          </div>

          {/* Billing Cycle */}
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
              Billing cycle
            </p>

            <Select value={billingCycle} onValueChange={setBillingCycle}>
              <SelectTrigger className="h-10 w-full bg-[#F7F9F9] text-sm dark:bg-white/5">
                <SelectValue placeholder="Select billing cycle" />
              </SelectTrigger>

              <SelectContent>
                {BILLING_CYCLES.map((cycle) => (
                  <SelectItem key={cycle} value={cycle}>
                    {cycle}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Seats */}
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
              Number of Seats
            </p>

            <Input defaultValue="20" className="h-10 bg-[#F7F9F9] text-sm dark:bg-white/5" />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                Start Date
              </p>

              <DatePickerField value={startDate} onChange={setStartDate} />
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">End Date</p>

              <DatePickerField value={endDate} onChange={setEndDate} />
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3 text-sm text-[#0C1014] dark:text-white">
            <Checkbox
              id="send-billing-email"
              checked={sendBillingEmail}
              onCheckedChange={setSendBillingEmail}
              className="mt-0.5"
            />
            <div>
              <label htmlFor="send-billing-email" className="block text-xs font-medium">
                Send billing email
              </label>
              <span className="block text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">
                Notify company with payment details
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-[#0C1014] dark:text-white">
            <Checkbox
              id="founding-company-badge"
              checked={foundingCompanyBadge}
              onCheckedChange={setFoundingCompanyBadge}
              className="mt-0.5"
            />
            <div>
              <label htmlFor="founding-company-badge" className="block text-xs font-medium">
                Founding Company Badge
              </label>
              <span className="block text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">
                Display badge across the platform
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            type="button"
            variant="secondary"
            onClick={closeDialog}
            className="h-10 bg-[#EAEEF3] dark:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="h-10 bg-[#1565C0] text-white hover:bg-[#0F54A1]"
            onClick={() =>
              onSubmit({
                price: '$70.99',
                billingCycle,
                seats: 20,
                startDate: format(startDate, 'dd-MM-yyyy'),
                endDate: format(endDate, 'dd-MM-yyyy'),
                sendBillingEmail,
                foundingCompanyBadge,
                contactName,
              })
            }
          >
            Approve & Send Email
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}

export default ApproveApplicationDialog
