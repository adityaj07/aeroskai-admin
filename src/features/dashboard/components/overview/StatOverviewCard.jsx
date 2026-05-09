import { Card } from '@/components/ui/card'

import { DASHBOARD_COLORS } from '../../constants/dashboard.constants'

import { SparklineAreaChart } from './SparklineAreaChart'

export const StatOverviewCard = ({ title, value, trend }) => {
  return (
    <Card className="h-[170px] rounded-2xl border border-[#ECEFF3] bg-white px-5 py-4 shadow-none dark:border-white/10 dark:bg-transparent">
      <div className="items-between flex h-full justify-between gap-6">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between">
          <p
            className="text-[14px] font-medium"
            style={{
              color: DASHBOARD_COLORS.cardTitle,
            }}
          >
            {title}
          </p>

          <p className="text-[56px] font-medium leading-none tracking-[-2px] text-[#0C1014] dark:text-white">
            {value}
          </p>
        </div>

        {/* RIGHT CHART */}
        <div className="flex flex-1 items-end justify-end overflow-hidden">
          <div className="w-full max-w-[250px] overflow-hidden pr-4 pt-6">
            <SparklineAreaChart points={trend} />
          </div>
        </div>
      </div>
    </Card>
  )
}
