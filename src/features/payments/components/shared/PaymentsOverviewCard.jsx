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
      <Card className="h-[170px] rounded-2xl border border-[#ECEFF3] bg-white px-5 py-4 shadow-none dark:border-white/10 dark:bg-transparent">
        <div className="items-between flex h-full justify-between gap-6">
          <div className="flex flex-col justify-between">
            <p className="text-[14px] font-medium text-[#6F7680] dark:text-[#A9B0BA]">{title}</p>
            <p className="text-[44px] font-medium leading-none tracking-[-1.5px] text-[#0C1014] dark:text-white sm:text-[48px]">
              {value}
            </p>
          </div>

          <div className="flex flex-1 items-end justify-end overflow-hidden">
            <div className="w-full max-w-[220px]">
              <SparklineAreaChart points={trend} />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
