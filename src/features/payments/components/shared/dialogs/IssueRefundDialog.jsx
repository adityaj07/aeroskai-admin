import { useMemo, useState } from 'react'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const refundTypes = ['Full Refund', 'Partial Refund']
const refundReasons = ['Requested by customer', 'Duplicate charge', 'Billing error']

export const IssueRefundDialog = ({ open, payment, onClose, onSubmit }) => {
  const maxRefundable = useMemo(() => Number(String(payment?.amount ?? '0').replace(/[^0-9.-]+/g, '')) || 0, [payment])
  const [refundType, setRefundType] = useState('Full Refund')
  const [refundAmount, setRefundAmount] = useState('')
  const [reason, setReason] = useState('Requested by customer')

  const handleSubmit = () => {
    onSubmit?.({ paymentId: payment?.id, refundType, refundAmount, reason })
    onClose()
  }

  return (
    <BaseDialog open={open} title="Issue refund" onClose={onClose} widthClassName="max-w-[640px]">
      <div className="space-y-3">
        <div className="rounded-lg bg-[#EEF1FA] p-3 text-xs text-[#1565C0] dark:bg-[#1A2234] dark:text-[#93C5FD]">
          <p className="font-semibold">{payment?.referenceId ?? 'TXN-000000'}</p>
          <p>{payment?.company ?? payment?.user ?? 'N/A'}</p>
          <p>{payment?.amount ?? '$0.00'}</p>
          <p>Paid on {payment?.date ?? 'N/A'} via {payment?.paymentMethod ?? 'N/A'}</p>
          <p>Status: {payment?.status ?? 'N/A'}</p>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Refund Type</p>
          <Select value={refundType} onValueChange={setRefundType}>
            <SelectTrigger className="h-10 w-full rounded-md border border-[#F3F4F6] bg-[#F7F9F9] text-sm text-[#0C1014] dark:border-white/10 dark:bg-white/5 dark:text-white">
              <SelectValue placeholder="Refund type" />
            </SelectTrigger>
            <SelectContent>
              {refundTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Refund Amount</p>
          <Input
            value={refundAmount}
            onChange={(event) => setRefundAmount(event.target.value)}
            placeholder="Enter amount"
            className="h-10 rounded-md border-[#F3F4F6] bg-[#F7F9F9] text-sm dark:border-white/10 dark:bg-white/5"
          />
          <p className="mt-1 text-[11px] text-[#6F7680] dark:text-[#9AA2AD]">Maximum refundable: ${maxRefundable.toFixed(2)}</p>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Reason</p>
          <Select value={reason} onValueChange={setReason}>
            <SelectTrigger className="h-10 w-full rounded-md border border-[#F3F4F6] bg-[#F7F9F9] text-sm text-[#0C1014] dark:border-white/10 dark:bg-white/5 dark:text-white">
              <SelectValue placeholder="Reason" />
            </SelectTrigger>
            <SelectContent>
              {refundReasons.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            type="button"
            onClick={onClose}
            className="h-10 rounded-md bg-[#EAEEF3] text-sm font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="h-10 rounded-md bg-[#DC2626] text-sm font-semibold text-white hover:bg-[#B91C1C]"
          >
            Issue Refund
          </Button>
        </div>
      </div>
    </BaseDialog>
  )
}
