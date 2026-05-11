import { motion } from 'framer-motion'

import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { SUPPORT_STATUS_FILTERS } from '../constants/support.constants'

import { SupportSearchToolbar } from './SupportSearchToolbar'
import { SupportStatusBadge } from './SupportStatusBadge'

export const SupportConversationList = ({
  tab,
  onTabChange,
  search,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  conversations,
  activeConversationId,
  onSelectConversation,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="flex h-full min-h-0 flex-col rounded-xl bg-transparent pr-1 xl:rounded-r-none"
    >
      <Tabs value={tab} onValueChange={onTabChange} className="mb-3">
        <TabsList className="inline-flex h-10 items-center rounded-lg bg-[#F7F9F9] p-1 dark:bg-white/5">
          <TabsTrigger
            value="companies"
            className="h-8 rounded-md px-4 text-[13px] font-semibold text-[#6F7680] transition-colors data-[state=active]:bg-[#1565C0] data-[state=active]:text-white dark:text-white"
          >
            Companies
          </TabsTrigger>

          <TabsTrigger
            value="individual-users"
            className="h-8 rounded-md px-4 text-[13px] font-semibold text-[#6F7680] transition-colors data-[state=active]:bg-[#1565C0] data-[state=active]:text-white dark:text-white"
          >
            Individual Users
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <SupportSearchToolbar search={search} onSearchChange={onSearchChange} />
      <StatusSwitcher
        statuses={SUPPORT_STATUS_FILTERS}
        selectedStatus={selectedStatus}
        onStatusChange={onStatusChange}
      />

      <div className="-pr-14 mt-2 min-h-0 flex-1 space-y-1 overflow-y-auto">
        {conversations.map((conversation) => {
          const isActive = conversation.id === activeConversationId

          return (
            <button
              key={conversation.id}
              type="button"
              onClick={() => onSelectConversation(conversation.id)}
              className={`w-full rounded-lg px-2 py-2 text-left transition-colors ${
                isActive
                  ? 'bg-[#F1F5F9] dark:bg-white/10'
                  : 'hover:bg-[#F8FAFC] dark:hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={conversation.avatar}
                  alt={conversation.username}
                  className="h-9 w-9 shrink-0 self-stretch rounded-full object-cover"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate text-xs font-semibold text-[#0C1014] dark:text-white">
                      {conversation.username}
                    </p>

                    <div className="flex items-center gap-1.5">
                      {!!conversation.unreadCount && (
                        <span className="inline-flex min-w-4 items-center justify-center rounded-full bg-[#1565C0] px-1.5 py-0.5 text-[10px] text-white">
                          {conversation.unreadCount}
                        </span>
                      )}
                      <SupportStatusBadge status={conversation.status} />
                    </div>
                  </div>

                  <p className="mt-0.5 text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">
                    <span className="inline-block max-w-[78%] truncate align-bottom">
                      {conversation.lastMessage}
                    </span>
                    <span className="mx-1 text-[#98A2B3]">•</span>
                    <span className="text-[10px] text-[#98A2B3]">{conversation.timeAgo}</span>
                  </p>
                </div>
              </div>
            </button>
          )
        })}

        {!conversations.length && (
          <p className="py-8 text-center text-sm text-[#6F7680] dark:text-[#A9B0BA]">
            No support conversations found.
          </p>
        )}
      </div>
    </motion.section>
  )
}
