import { ArrowDown01Icon, ArrowUp01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from 'recharts'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { DASHBOARD_COLORS } from '../../constants/dashboard.constants'
import { formatCompactNumber } from '@/utils/formatCompactNumber'

const chartConfig = {
  amount: {
    label: 'Revenue',
    color: DASHBOARD_COLORS.primaryBlue,
  },
}

const formatTick = (value) => {
  if (value === 0) return '0'
  return `${value / 1000}K`
}

export const RevenueBarChartCard = ({ revenue }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(revenue.period || 'Month')
  const [isPeriodOpen, setIsPeriodOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <Card className="h-full min-w-0 overflow-hidden rounded-[20px] border-[#ECEFF3] p-4 dark:border-[#25292E] dark:bg-transparent">
        <div className="mb-6.75 flex min-w-0 items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block h-8 w-3 rounded-[3px] bg-[#1E88E5]" />
              <p className="text-base font-bold text-[#0C1014] dark:text-white">{revenue.title}</p>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <p className="truncate text-[30px] font-medium leading-none text-[#0C1014] dark:text-white sm:text-[40px]">
                ${formatCompactNumber(revenue.amount.toFixed(2))}
              </p>
              <p className="inline-flex items-center gap-1 text-xs font-medium text-[#12B76A]">
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={12} strokeWidth={1.8} />
                {revenue.growth}%
              </p>
            </div>
          </div>

          <DropdownMenu open={isPeriodOpen} onOpenChange={setIsPeriodOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 cursor-pointer gap-1 rounded-md border-[#ECEFF3] px-2.5 text-xs text-[#6F7680] dark:border-[#25292E] dark:text-[#A9B0BA]"
              >
                {selectedPeriod}
                <HugeiconsIcon
                  icon={isPeriodOpen ? ArrowUp01Icon : ArrowDown01Icon}
                  size={14}
                  strokeWidth={1.8}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-28">
              {['Week', 'Month', 'Quarter', 'Year'].map((period) => (
                <DropdownMenuItem key={period} onClick={() => setSelectedPeriod(period)}>
                  {period}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ChartContainer className="!aspect-auto h-[290px] w-full min-w-0" config={chartConfig}>
          <BarChart
            data={revenue.data}
            barSize={48}
            barCategoryGap="20%"
            margin={{ top: 10, right: 8, left: -10, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#E9EEF5" strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              minTickGap={10}
              tick={{ fill: '#6F7680', fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              ticks={[0, 20000, 40000, 60000]}
              tickFormatter={formatTick}
              tick={{ fill: '#6F7680', fontSize: 10 }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  formatter={(value) => (
                    <span className="font-medium">${value.toLocaleString()}</span>
                  )}
                />
              }
            />
            <Bar dataKey="amount" radius={[6, 6, 6, 6]}>
              {revenue.data.map((entry) => (
                <Cell
                  key={entry.day}
                  fill={entry.highlighted ? DASHBOARD_COLORS.primaryBlue : '#1E88E51A'}
                />
              ))}
              <LabelList
                dataKey="amount"
                content={({ x, y, value, payload }) => {
                  if (!payload?.highlighted) return null
                  if (typeof x !== 'number' || typeof y !== 'number' || typeof value !== 'number') {
                    return null
                  }

                  return (
                    <g>
                      <rect
                        x={x - 1}
                        y={y - 28}
                        rx={5}
                        ry={5}
                        width={40}
                        height={20}
                        fill="#0C1014"
                      />
                      <text x={x + 19} y={y - 14} fill="#fff" textAnchor="middle" fontSize={10}>
                        ${Math.round(value / 1000)}K
                      </text>
                    </g>
                  )
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </Card>
    </motion.div>
  )
}
