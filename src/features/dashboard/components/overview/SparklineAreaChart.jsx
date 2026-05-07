import { useId } from 'react'
import { Area, AreaChart } from 'recharts'

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

import { DASHBOARD_COLORS } from '../../constants/dashboard.constants'

const chartConfig = {
  value: {
    label: 'Value',
    color: DASHBOARD_COLORS.primaryBlue,
  },
}

export const SparklineAreaChart = ({ points }) => {
  const gradientId = useId().replace(/:/g, '')
  const data = points.map((value, index) => ({ label: index + 1, value }))

  return (
    <div className="relative">
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent dark:from-[#121417]" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent dark:from-[#121417]" />

    <ChartContainer className="h-[90px] w-full overflow-hidden p-0 !aspect-auto" config={chartConfig}>
        <AreaChart
          data={data}
          margin={{
            top: 6,
            right: -12,
            bottom: 0,
            left: -12,
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={DASHBOARD_COLORS.primaryBlue} stopOpacity={0.32} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel formatter={(value) => <span>{value}</span>} />}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke={DASHBOARD_COLORS.primaryBlue}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            dot={false}
            activeDot={{
              r: 3,
              fill: DASHBOARD_COLORS.primaryBlue,
            }}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
