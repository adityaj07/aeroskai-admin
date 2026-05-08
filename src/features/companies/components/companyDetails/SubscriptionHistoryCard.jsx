import { useMemo } from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

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
  if (status === 'Refunded') {
    return (
      <span className="rounded-lg bg-[#1565C01A] px-2 py-1 text-xs text-[#1565C0]">Refunded</span>
    )
  }

  return (
    <span className="rounded-lg bg-[#16A34A1A] px-2 py-1 text-xs text-[#15803D]">Successful</span>
  )
}

const columns = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'method', header: 'Method' },
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
        className="h-8 rounded-md bg-[#EAEEF3] px-3 text-xs font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white"
      >
        Issue Refund
      </Button>
    ),
  },
]

export const SubscriptionHistoryCard = ({ rows }) => {
  const data = useMemo(() => rows ?? [], [rows])
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <AdminSectionCard title="Subscription History" contentClassName="p-0 min-w-0">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-170">
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
              <TableRow key={row.id} className="border-b border-[#F3F4F6] dark:border-white/10">
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
    </AdminSectionCard>
  )
}
