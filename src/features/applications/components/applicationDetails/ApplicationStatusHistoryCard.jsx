import { motion } from 'framer-motion'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

export const ApplicationStatusHistoryCard = ({ title, items }) => {
  return (
    <AdminSectionCard title={title} contentClassName="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${item.date}-${index}`}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.18, delay: index * 0.04, ease: 'easeOut' }}
          className="flex items-start gap-3"
        >
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1565C0] shadow-[0_0_0_4px_rgba(21,101,192,0.10)] dark:shadow-[0_0_0_4px_rgba(141,190,255,0.12)]" />
          <div>
            <p className="text-sm font-medium text-[#0C1014] dark:text-white">{item.title}</p>
            <p className="mt-1 text-xs text-[#6F7680] dark:text-[#A9B0BA]">{item.date}</p>
          </div>
        </motion.div>
      ))}
    </AdminSectionCard>
  )
}

export default ApplicationStatusHistoryCard
