import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ROUTES } from '@/constants/routes.constants'

import { StatusBadge } from '@/components/shared/app/StatusBadge'

const getColumns = (navigate) => [
  {
    accessorKey: 'username',
    header: 'Username',
    cell: ({ row }) => (
      <span className="font-medium text-[#0C1014] dark:text-white">{row.original.username}</span>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'plan',
    header: 'Plan',
  },
  {
    accessorKey: 'nextRenewal',
    header: 'Next Renewal',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    id: 'actions',
    header: 'Actions',

    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="h-8 cursor-pointer rounded-md bg-[#EAEEF3] px-3 text-xs font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        onClick={() =>
          navigate(`${ROUTES.DASHBOARD}/${ROUTES.SUBSCRIPTION_DETAIL_USER(row.original.id)}`)
        }
      >
        View Details
      </Button>
    ),
  },
]

export const SubscriptionUsersTable = ({ users = [], meta }) => {
  const navigate = useNavigate()

  const data = useMemo(() => users, [users])

  const columns = useMemo(() => getColumns(navigate), [navigate])

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
      className="overflow-hidden rounded-xl border border-[#EEF1F4] pt-4 dark:border-[#25292E]"
    >
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[980px]">
          <TableHeader className="bg-[#F7F9F9] dark:bg-[#171A1E]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-[#EEF1F4] hover:bg-transparent dark:border-[#25292E]"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="h-12 bg-[#F7F9F9] px-4 text-xs font-semibold
            text-[#0C1014] dark:bg-[#14171A] dark:text-[#F7F9F9]"
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
                className="border-b border-[#F3F4F6] hover:bg-[#FBFCFD] dark:border-[#25292E] dark:hover:bg-[#14171A]"
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
                  No individual subscriptions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between border-t border-[#EEF1F4] px-4 py-3 text-xs text-[#6F7680] dark:border-[#25292E] dark:text-[#9AA2AD]">
        <p>
          Showing 1-{data.length} of {total}
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
    </motion.div>
  )
}

export default SubscriptionUsersTable
