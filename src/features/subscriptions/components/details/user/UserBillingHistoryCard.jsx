import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useMemo } from 'react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const StatusBadge = ({ status }) => {
  const styles = {
    Successful: 'bg-[#16A34A1A] text-[#15803D]',
    Refunded: 'bg-[#1565C01A] text-[#1565C0]',
    Failed: 'bg-[#DC26261A] text-[#DC2626]',
  }

  return <span className={`rounded-lg px-2 py-1 text-xs ${styles[status] ?? ''}`}>{status}</span>
}

const getColumns = () => [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'plan', header: 'Plan' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'method', header: 'Payment Method' },
  { accessorKey: 'transactionId', header: 'Transaction ID' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <Button
        variant="ghost"
        className="h-8 cursor-pointer rounded-md bg-[#EAEEF3] px-3 text-xs font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white"
      >
        Issue Refund
      </Button>
    ),
  },
]

export const UserBillingHistoryCard = ({ rows }) => {
  const data = useMemo(() => rows ?? [], [rows])
  const columns = useMemo(() => getColumns(), [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <AdminSectionCard title="Billing History" contentClassName="p-0 min-w-0">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[1000px]">
          <TableHeader className="bg-[#F7F9F9] dark:bg-[#171A1E]">
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id} className="hover:bg-transparent">
                {group.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 text-xs text-[#6F7680] dark:text-[#A9B0BA]"
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
              <TableRow key={row.id} className="border-b border-[#F3F4F6] dark:border-[#25292E]">
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
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between border-t border-[#EEF1F4] px-4 py-3 text-xs text-[#6F7680] dark:border-[#25292E] dark:text-[#9AA2AD]">
        <p>
          Showing 1-{data.length} of {data.length}
        </p>

        <div className="flex items-center gap-2">
          <button className="cursor-pointer rounded-md p-1 text-[#9AA2AD] hover:bg-[#F5F7FA] hover:text-[#0C1014] dark:hover:bg-white/5 dark:hover:text-white">
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
          </button>

          <button className="cursor-pointer rounded-md p-1 text-[#9AA2AD] hover:bg-[#F5F7FA] hover:text-[#0C1014] dark:hover:bg-white/5 dark:hover:text-white">
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </button>
        </div>
      </div>
    </AdminSectionCard>
  )
}
