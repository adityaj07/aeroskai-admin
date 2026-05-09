import { Add01Icon, AddToListIcon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const QuickActionCard = ({ title, description, icon = 'list', onAction }) => {
  const leadingIcon = icon === 'plus' ? Add01Icon : AddToListIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <Card className="rounded-[20px] border-[#ECEFF3] p-4 dark:border-white/10 dark:bg-transparent">
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <div className="rounded-full bg-[#1E88E5]/10 p-2 text-[#1E88E5] dark:bg-[#1E88E5]/20">
            <HugeiconsIcon icon={leadingIcon} size={14} strokeWidth={1.8} />
          </div>
          <Button
            variant="default"
            size="icon-sm"
            className="h-8 w-8 rounded-full bg-[#1E88E5] p-0 text-white hover:bg-[#1976D2]"
            onClick={onAction}
          >
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2} />
          </Button>
        </div>

        <h3 className="text-sm font-semibold text-[#0C1014] dark:text-white">{title}</h3>
        <p className="mt-1 text-xs text-[#98A2B3] dark:text-[#A9B0BA]">{description}</p>
      </Card>
    </motion.div>
  )
}
