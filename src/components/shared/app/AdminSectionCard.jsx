import { motion } from 'framer-motion'
import clsx from 'clsx'

import { Separator } from '@/components/ui/separator'

export const AdminSectionCard = ({
  title,
  description,
  action,
  children,
  className,
  contentClassName,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={clsx(
        'dark:bg-background rounded-xl border border-[#F3F4F6] bg-transparent dark:border-[#25292E]',
        className
      )}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4 px-4 pt-4 md:px-5 md:pt-5">
        <div className="min-w-0">
          <h2 className="text-[14px] font-semibold text-[#6F7680] dark:text-[#A2AAB4]">{title}</h2>

          {description && (
            <p className="mt-1 text-[13px] text-[#98A2B3] dark:text-white/60">{description}</p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>

      {/* SEPARATOR */}
      <Separator className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

      {/* CONTENT */}
      <div className={clsx('p-4 md:p-5', contentClassName)}>{children}</div>
    </motion.section>
  )
}
