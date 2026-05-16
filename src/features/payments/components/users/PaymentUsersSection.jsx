import { useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { formatCurrency, parseCurrencyAmount } from '@/utils/formatCurrency'

import {
  PAYMENT_DURATION_FILTERS,
  PAYMENT_STATUS_FILTERS,
} from '../../constants/payments.constants'
import { useIndividualPayments } from '../../hooks/useIndividualPayments'
import { PaymentsOverviewCard } from '../shared/PaymentsOverviewCard'
import { PaymentsToolbar } from '../shared/PaymentsToolbar'
import { IssueRefundDialog } from '../shared/dialogs/IssueRefundDialog'

import { PaymentUsersTable } from './PaymentUsersTable'
import { PaymentsPageSkeleton } from '@/components/shared/app/skeletons/payments/PaymentsPageSkeleton'

const downloadCsv = (rows) => {
  const headers = ['User', 'Reference ID', 'Plan', 'Amount', 'Payment Method', 'Status', 'Date']
  const csvRows = rows.map((row) => [
    row.user,
    row.referenceId,
    row.plan,
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
  link.setAttribute('download', `individual-payments-${Date.now()}.csv`)
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

export const PaymentUsersSection = () => {
  const [status, setStatus] = useState('All')
  const [duration, setDuration] = useState('Last 30 days')
  const [search, setSearch] = useState('')
  const [refundDialogOpen, setRefundDialogOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)

  const debouncedSearch = useDebounce(search, 250)

  const { data: paymentData, isLoading } = useIndividualPayments({
    status,
    search: debouncedSearch,
    duration,
  })
  const { data: allPaymentsData } = useIndividualPayments({
    status: 'All',
    search: '',
    duration,
  })

  const buildTrend = (seed) => [43, 44, 44, 43, 42, 42, 45, 47, 47, 46, 45, 46].map((v) => v + seed)

  const overviewSource = allPaymentsData?.data ?? []

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
        <PaymentsPageSkeleton />
      ) : (
        <PaymentUsersTable
          users={paymentData?.data}
          meta={paymentData?.meta}
          onIssueRefund={(payment) => {
            setSelectedPayment(payment)
            setRefundDialogOpen(true)
          }}
        />
      )}

      <IssueRefundDialog
        open={refundDialogOpen}
        payment={selectedPayment}
        onClose={() => {
          setRefundDialogOpen(false)
          setSelectedPayment(null)
        }}
      />
    </div>
  )
}
