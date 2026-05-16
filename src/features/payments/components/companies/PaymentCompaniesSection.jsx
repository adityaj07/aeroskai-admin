import { useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { formatCurrency, parseCurrencyAmount } from '@/utils/formatCurrency'

import {
  PAYMENT_DURATION_FILTERS,
  PAYMENT_STATUS_FILTERS,
} from '../../constants/payments.constants'
import { useCompanyPayments } from '../../hooks/useCompanyPayments'
import { PaymentsOverviewCard } from '../shared/PaymentsOverviewCard'
import { PaymentsToolbar } from '../shared/PaymentsToolbar'
import { IssueRefundDialog } from '../shared/dialogs/IssueRefundDialog'
import { RecordPaymentDialog } from '../shared/dialogs/RecordPaymentDialog'

import { PaymentCompaniesTable } from './PaymentCompaniesTable'
import { PaymentsPageSkeleton } from '@/components/shared/app/skeletons/payments/PaymentsPageSkeleton'

const downloadCsv = (rows) => {
  const headers = ['Company', 'Reference ID', 'Seats', 'Amount', 'Payment Method', 'Status', 'Date']
  const csvRows = rows.map((row) => [
    row.company,
    row.referenceId,
    row.seats,
    row.amount,
    row.paymentMethod,
    row.status,
    row.date,
  ])

  const csvContent = [headers, ...csvRows]
    .map((line) => line.map((item) => `"${String(item ?? '').replaceAll('"', '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `company-payments-${Date.now()}.csv`)
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

export const PaymentCompaniesSection = () => {
  const [status, setStatus] = useState('All')
  const [duration, setDuration] = useState('Last 30 days')
  const [search, setSearch] = useState('')
  const [recordDialogOpen, setRecordDialogOpen] = useState(false)
  const [refundDialogOpen, setRefundDialogOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)

  const debouncedSearch = useDebounce(search, 250)

  const { data: paymentData, isLoading } = useCompanyPayments({
    status,
    search: debouncedSearch,
    duration,
  })
  const { data: allCompanyPaymentsData } = useCompanyPayments({
    status: 'All',
    search: '',
    duration,
  })

  const buildTrend = (seed) => [43, 44, 44, 43, 42, 42, 45, 47, 47, 46, 45, 46].map((v) => v + seed)

  const overviewSource = allCompanyPaymentsData?.data ?? []

  const totalRevenueAmount = overviewSource.reduce(
    (sum, payment) => sum + parseCurrencyAmount(payment.amount),
    0
  )
  const activeSubscriptionsAmount = overviewSource
    .filter((payment) => payment.status === 'Successful')
    .reduce((sum, payment) => sum + parseCurrencyAmount(payment.amount), 0)
  const refundsAmount = overviewSource
    .filter((payment) => payment.status === 'Refunded')
    .reduce((sum, payment) => sum + parseCurrencyAmount(payment.amount), 0)

  const overviewMetrics = {
    totalRevenue: formatCurrency(totalRevenueAmount),
    activeSubscriptionsRevenue: formatCurrency(activeSubscriptionsAmount),
    refunds: formatCurrency(refundsAmount),
    failedPayments: overviewSource.filter((payment) => payment.status === 'Failed').length,
  }

  const visibleRows = paymentData?.data ?? []

  const handleOpenRefundDialog = (payment) => {
    setSelectedPayment(payment)
    setRefundDialogOpen(true)
  }

  const handleCloseRefundDialog = () => {
    setRefundDialogOpen(false)
    setSelectedPayment(null)
  }

  return (
    <div className="space-y-6">
      <PaymentsToolbar
        search={search}
        onSearchChange={setSearch}
        placeholder="Search by user, company, or transaction ID"
        status={status}
        statuses={PAYMENT_STATUS_FILTERS}
        onStatusChange={setStatus}
        duration={duration}
        durations={PAYMENT_DURATION_FILTERS}
        onDurationChange={setDuration}
        onExportCsv={() => downloadCsv(visibleRows)}
        showRecordPayment
        onRecordPayment={() => setRecordDialogOpen(true)}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <PaymentsOverviewCard
          title="Total Revenue"
          value={overviewMetrics.totalRevenue}
          trend={buildTrend(0)}
        />
        <PaymentsOverviewCard
          title="Active Subscriptions Revenue"
          value={overviewMetrics.activeSubscriptionsRevenue}
          trend={buildTrend(-2)}
        />
        <PaymentsOverviewCard
          title="Refunds"
          value={overviewMetrics.refunds}
          trend={buildTrend(-5)}
        />
        <PaymentsOverviewCard
          title="Failed Payments"
          value={overviewMetrics.failedPayments}
          trend={buildTrend(-1)}
        />
      </div>

      {isLoading ? (
        <PaymentsPageSkeleton showRecordPayment />
      ) : (
        <PaymentCompaniesTable
          companies={paymentData?.data}
          meta={paymentData?.meta}
          onIssueRefund={handleOpenRefundDialog}
        />
      )}

      <RecordPaymentDialog
        open={recordDialogOpen}
        onClose={() => setRecordDialogOpen(false)}
        onSubmit={(values) => {
          console.log(values)

          setRecordDialogOpen(false)
        }}
      />
      <IssueRefundDialog
        open={refundDialogOpen}
        payment={selectedPayment}
        onClose={handleCloseRefundDialog}
      />
    </div>
  )
}
