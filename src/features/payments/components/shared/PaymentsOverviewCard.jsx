import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import { SparklineAreaChart } from '@/features/dashboard/components/overview/SparklineAreaChart'

export const PaymentsOverviewCard = ({ title, value, trend = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <Card className="h-[160px] rounded-2xl border border-[#ECEFF3] bg-white px-4 py-4 shadow-none sm:h-[170px] sm:px-5 dark:border-white/10 dark:bg-transparent">
        <div className="items-between grid h-full grid-cols-[minmax(0,1fr)_110px] gap-3 sm:grid-cols-[minmax(0,1fr)_130px]">
          <div className="flex min-w-0 flex-col justify-between">
            <p className="text-[14px] font-medium text-[#6F7680] dark:text-[#A9B0BA]">{title}</p>
            <p className="max-w-full overflow-hidden text-[clamp(2rem,4.2vw,3rem)] font-medium leading-none tracking-[-1px] text-[#0C1014] dark:text-white">
              {value}
            </p>
          </div>

          <div className="flex items-end justify-end overflow-hidden">
            <div className="w-full max-w-[130px] sm:max-w-[170px]">
              <SparklineAreaChart points={trend} />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
