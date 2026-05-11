import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { PaymentsStatusBadge } from '../shared/PaymentsStatusBadge'

const getColumns = (onIssueRefund) => [
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => (
      <span className="font-medium text-[#0C1014] dark:text-white">{row.original.user}</span>
    ),
  },
  {
    accessorKey: 'referenceId',
    header: 'Reference ID',
  },
  {
    accessorKey: 'plan',
    header: 'Plan',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Payment Method',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <PaymentsStatusBadge status={row.original.status} />,
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    id: 'actions',
    header: 'Actions',

    cell: ({ row }) =>
      row.original.status === 'Successful' ? (
        <Button
          variant="ghost"
          className="h-8 rounded-md bg-[#EAEEF3] px-3 text-xs font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          onClick={() => onIssueRefund?.(row.original)}
        >
          Issue Refund
        </Button>
      ) : null,
  },
]

export const PaymentUsersTable = ({ users = [], meta, onIssueRefund }) => {
  const data = useMemo(() => users, [users])

  const columns = useMemo(() => getColumns(onIssueRefund), [onIssueRefund])

  const total = meta?.total ?? data.length

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="overflow-hidden rounded-xl border border-[#EEF1F4] pt-4 dark:border-white/10"
    >
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[920px] lg:min-w-[980px]">
          <TableHeader className="bg-[#F7F9F9] dark:bg-[#171A1E]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-[#EEF1F4] hover:bg-transparent dark:border-white/10"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="h-12 bg-[#F7F9F9] px-4 text-xs font-semibold text-[#0C1014] dark:bg-[#171A1E] dark:text-[#9AA2AD]"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-b border-[#F3F4F6] hover:bg-[#FBFCFD] dark:border-white/10 dark:hover:bg-white/5"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-4 py-3 text-xs text-[#4B5563] dark:text-[#C2C7D0]"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}

            {!table.getRowModel().rows.length && (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="py-10 text-center text-sm text-[#6F7680] dark:text-[#9AA2AD]"
                >
                  No payments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-2 border-t border-[#EEF1F4] px-4 py-3 text-xs text-[#6F7680] dark:border-white/10 dark:text-[#9AA2AD] sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing 1-{data.length} of {total}
        </p>

        <div className="flex items-center gap-2">
          <button className="rounded-md p-1 text-[#9AA2AD] hover:bg-[#F5F7FA] hover:text-[#0C1014] dark:hover:bg-white/5 dark:hover:text-white">
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
          </button>

          <button className="rounded-md p-1 text-[#9AA2AD] hover:bg-[#F5F7FA] hover:text-[#0C1014] dark:hover:bg-white/5 dark:hover:text-white">
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
