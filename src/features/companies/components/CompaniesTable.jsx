import { useMemo } from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import companyPlaceholder from '@/assets/images/company-placeholder.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes.constants'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { CompanyStatusBadge } from './CompanyStatusBadge'

const getColumns = (navigate) => [
  {
    accessorKey: 'company',
    header: 'Company',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar
          size="lg"
          className="h-[40px] w-[40px] border border-[#E5E7EB] dark:border-white/10"
        >
          <AvatarImage src={companyPlaceholder} alt={row.original.logoAlt} />
          <AvatarFallback className="bg-[#EAEEF3] text-[10px] text-[#6F7680] dark:bg-white/10 dark:text-[#9AA2AD]">
            {row.original.company.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium text-[#0C1014] dark:text-white">{row.original.company}</span>
      </div>
    ),
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'totalEmployees',
    header: 'Total Employees',
  },
  {
    accessorKey: 'payment',
    header: 'Payment',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <CompanyStatusBadge status={row.original.status} />,
  },
  {
    accessorKey: 'subscriptionExpiry',
    header: 'Subscription Expiry',
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="h-8 rounded-md bg-[#EAEEF3] px-3 text-xs font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        onClick={() => navigate(`${ROUTES.DASHBOARD}/${ROUTES.COMPANY_DETAIL(row.original.id)}`)}
      >
        View Details
      </Button>
    ),
  },
]

export const CompaniesTable = ({ companies }) => {
  const navigate = useNavigate()
  const data = useMemo(() => companies ?? [], [companies])
  const columns = useMemo(() => getColumns(navigate), [navigate])

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
      className="overflow-hidden rounded-xl border border-[#EEF1F4] dark:border-white/10"
    >
      <Table className="min-w-[980px]">
        <TableHeader className="bg-[#F7F9F9] dark:bg-[#171A1E]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="border-b border-[#EEF1F4] hover:bg-transparent dark:border-white/10"
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="h-11 px-4 text-xs font-semibold text-[#6F7680] dark:text-[#9AA2AD]"
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
                No companies found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </motion.div>
  )
}
