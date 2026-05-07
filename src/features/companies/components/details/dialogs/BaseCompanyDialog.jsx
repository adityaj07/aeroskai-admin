import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'

const transition = { duration: 0.2, ease: 'easeOut' }

export const BaseCompanyDialog = ({
  open,
  title,
  onClose,
  children,
  widthClassName = 'max-w-[620px]',
}) => {
  const dialogContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          onClick={onClose}
          className="z-999 fixed inset-0 flex min-h-screen items-center justify-center bg-black/25 px-4 py-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={transition}
            onClick={(event) => event.stopPropagation()}
            className={`max-h-[90vh] w-full overflow-y-auto ${widthClassName} rounded-2xl bg-white p-4 shadow-xl dark:bg-[#121417] md:p-5`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#1F1E1F] dark:text-white">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-7 items-center justify-center rounded-full text-[#1F1E1F] hover:bg-[#F3F4F6] dark:text-white dark:hover:bg-white/10"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={16} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  if (typeof window === 'undefined') return null

  return createPortal(dialogContent, document.body)
}
