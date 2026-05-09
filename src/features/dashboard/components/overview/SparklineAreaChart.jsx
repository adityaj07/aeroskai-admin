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
  const maskId = useId().replace(/:/g, '')

  const data = points.map((value, index) => ({
    label: index + 1,
    value,
  }))

  return (
    <ChartContainer
      className="!aspect-auto h-[110px] w-full overflow-hidden p-0"
      config={chartConfig}
    >
      <AreaChart
        data={data}
        margin={{
          top: 40,
          right: -6,
          bottom: 0,
          left: -14,
        }}
      >
        <defs>
          {/* AREA FILL */}
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={DASHBOARD_COLORS.primaryBlue} stopOpacity={0.45} />

            <stop offset="65%" stopColor={DASHBOARD_COLORS.primaryBlue} stopOpacity={0.08} />

            <stop offset="100%" stopColor={DASHBOARD_COLORS.primaryBlue} stopOpacity={0} />
          </linearGradient>

          {/* EDGE FADE MASK */}
          <linearGradient id={maskId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />

            <stop offset="12%" stopColor="white" stopOpacity="1" />

            <stop offset="88%" stopColor="white" stopOpacity="1" />

            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id={`mask-${maskId}`}>
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#${maskId})`} />
          </mask>
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
          mask={`url(#mask-${maskId})`}
          dot={false}
          activeDot={{
            r: 3,
            fill: DASHBOARD_COLORS.primaryBlue,
          }}
        />
      </AreaChart>
    </ChartContainer>
  )
}
