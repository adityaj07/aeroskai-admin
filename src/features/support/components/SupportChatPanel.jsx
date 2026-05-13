import { ArrowLeft01Icon, Image01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { SupportImageUploadDialog } from './SupportImageUploadDialog'

export const SupportChatPanel = ({ conversation, onBack }) => {
  const [uploadOpen, setUploadOpen] = useState(false)
  const chatStartTime = conversation?.messages?.find((message) => message.time)?.time

  if (!conversation) {
    return (
      <section className="flex h-full min-h-[460px] items-center justify-center rounded-xl border border-[#EEF1F4] bg-transparent p-6 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#A9B0BA]">
        Select a support query to view messages.
      </section>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="flex h-full min-h-[460px] min-w-0 flex-col rounded-xl border border-[#EEF1F4] bg-transparent dark:border-[#25292E]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#EEF1F4] px-3 py-3 dark:border-[#25292E] md:px-4">
          <div className="flex min-w-0 items-center gap-2 md:gap-3">
            {!!onBack && (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[#F7F9F9] text-[#6F7680] dark:bg-white/10 dark:text-[#A9B0BA] lg:hidden"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
              </button>
            )}

            <img
              src={conversation.avatar}
              alt={conversation.username}
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-[#0C1014] dark:text-white">
                {conversation.username}
              </p>
              <p className="truncate text-[10px] text-[#6F7680] dark:text-[#A9B0BA]">
                {conversation.companyName ? 'Company' : 'Individual User'}
              </p>
            </div>
          </div>

          <Button className="h-8 cursor-pointer rounded-md bg-[#1565C0] px-3 text-[11px] text-white hover:bg-[#0F54A1]">
            <HugeiconsIcon icon={Tick02Icon} size={14} className="mr-1" />
            Mark as Resolved
          </Button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4 md:px-4">
          {chatStartTime && (
            <p className="pb-1 text-center text-[10px] text-[#98A2B3] dark:text-[#7E8896]">
              {chatStartTime}
            </p>
          )}

          {conversation.messages.map((message, index) => {
            const isAdmin = message.sender === 'admin'

            return (
              <div
                key={`${message.id}-${index}`}
                className={`flex ${isAdmin ? 'justify-end' : 'justify-start'}`}
              >
                {isAdmin ? (
                  <div className="max-w-[85%] rounded-md bg-[#EAF3FF] px-3 py-2 text-xs text-[#0C1014] dark:bg-[#1A2636] dark:text-[#E6ECF5] md:max-w-[70%]">
                    <p>{message.text}</p>
                  </div>
                ) : (
                  <div className="flex items-end gap-2 pr-6 md:pr-10">
                    <img
                      src={conversation.avatar}
                      alt={conversation.username}
                      className="h-8 w-8 shrink-0 rounded-full object-cover"
                    />

                    <div className="max-w-[85%] rounded-md bg-[#F7F9F9] px-3 py-2 text-xs text-[#0C1014] dark:bg-white/10 dark:text-white md:max-w-[70%]">
                      <p>{message.text}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className=" p-3  md:p-4">
          <div className="flex items-center gap-2 rounded-xl p-2">
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => setUploadOpen(true)}
                className="absolute left-3 top-1/2 inline-flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-[#6F7680] hover:text-[#1565C0] dark:text-[#A9B0BA]"
              >
                <HugeiconsIcon icon={Image01Icon} size={16} />
              </button>
              <Input
                placeholder="Type your message..."
                className="h-10 rounded-full border border-[#F3F4F6] bg-transparent pl-10 text-sm dark:border-[#25292E] "
              />
            </div>

            <Button className="h-10 cursor-pointer rounded-full bg-[#1565C0] px-5 text-xs text-white hover:bg-[#0F54A1]">
              Send
            </Button>
          </div>
        </div>
      </motion.div>

      <SupportImageUploadDialog
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onPickFile={(file) => toast.success(`${file.name} attached`)}
      />
    </>
  )
}
