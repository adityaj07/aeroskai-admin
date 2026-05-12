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
      className="h-full"
    >
      <Card className="flex h-full flex-col rounded-[20px] border-[#ECEFF3] p-4 dark:border-[#25292E] dark:bg-transparent">
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <div className=" rounded-full  p-2 text-[#1E88E5]">
            <HugeiconsIcon icon={leadingIcon} size={24} strokeWidth={1.8} />
          </div>

          <Button
            variant="default"
            size="icon-sm"
            className="size-[44px] shrink-0 cursor-pointer rounded-full bg-[#1E88E5] p-0 text-white hover:bg-[#1976D2]"
            onClick={onAction}
          >
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={24}
              strokeWidth={2}
              className="dark:text-black"
            />
          </Button>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-sm font-semibold text-[#0C1014] dark:text-white">{title}</h3>

          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#98A2B3] dark:text-[#A9B0BA]">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
