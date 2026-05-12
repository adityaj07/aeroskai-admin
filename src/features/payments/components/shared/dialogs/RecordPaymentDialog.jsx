import { useState } from 'react'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const paymentMethods = ['Bank Transfer', 'Stripe', 'Cash']

export const RecordPaymentDialog = ({ open, onClose, onSubmit }) => {
  const [company, setCompany] = useState('')
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Bank Transfer')
  const [referenceId, setReferenceId] = useState('')

  const handleSubmit = () => {
    onSubmit?.({ company, amount, paymentMethod, referenceId })
    onClose()
  }

  return (
    <BaseDialog open={open} title="Record Payment" onClose={onClose} widthClassName="max-w-[640px]">
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Company</p>
          <Input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Search by name or email"
            className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Amount</p>
          <Input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount"
            className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
            Payment Method
          </p>
          <Select value={paymentMethod} onValueChange={setPaymentMethod}>
            <SelectTrigger className="dark:placeholder:text-[#A9B0BA]5 h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:text-white">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
            Transaction ID / Reference
          </p>
          <Input
            value={referenceId}
            onChange={(event) => setReferenceId(event.target.value)}
            placeholder="Enter reference number"
            className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            type="button"
            onClick={onClose}
            className="h-10 cursor-pointer rounded-md bg-[#EAEEF3] text-sm font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="h-10 cursor-pointer rounded-md bg-[#1565C0] text-sm font-semibold text-white hover:bg-[#0F54A1]"
          >
            Record Payment
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}
