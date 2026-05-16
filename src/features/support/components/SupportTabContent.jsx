import { useEffect, useMemo, useState } from 'react'

import { SupportChatPanel } from './SupportChatPanel'
import { SupportConversationList } from './SupportConversationList'
import { SupportPageSkeleton } from '@/components/shared/app/skeletons/support/SupportPageSkeleton'

export const SupportTabContent = ({ companyData = [], individualData = [], isLoading }) => {
  const [tab, setTab] = useState('companies')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [activeConversationId, setActiveConversationId] = useState(null)
  const [mobileView, setMobileView] = useState('list')
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsCompact(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  const sourceData = tab === 'companies' ? companyData : individualData

  const filteredConversations = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return sourceData.filter((conversation) => {
      const matchesStatus = status === 'All' ? true : conversation.status === status
      const matchesSearch = normalizedSearch
        ? [
            conversation.username,
            conversation.fullName,
            conversation.companyName,
            conversation.lastMessage,
          ]
            .filter(Boolean)
            .some((field) => field.toLowerCase().includes(normalizedSearch))
        : true

      return matchesStatus && matchesSearch
    })
  }, [sourceData, search, status])

  const activeConversation = useMemo(() => {
    if (!filteredConversations.length) return null
    const selected = filteredConversations.find(
      (conversation) => conversation.id === activeConversationId
    )
    return selected ?? filteredConversations[0]
  }, [activeConversationId, filteredConversations])

  const handleSelectConversation = (conversationId) => {
    setActiveConversationId(conversationId)
    if (isCompact) setMobileView('chat')
  }

  const handleTabChange = (nextTab) => {
    setTab(nextTab)
    setStatus('All')
    setSearch('')
    setActiveConversationId(null)
    setMobileView('list')
  }

  if (isLoading) {
    return <SupportPageSkeleton />
  }

  return (
    <div className="h-full rounded-xl border border-[#EEF1F4] bg-transparent p-3 dark:border-[#25292E]">
      <div className="grid h-full min-w-0 gap-0 lg:grid-cols-[minmax(0,40%)_24px_minmax(0,60%)]">
        {(!isCompact || mobileView === 'list') && (
          <SupportConversationList
            tab={tab}
            onTabChange={handleTabChange}
            search={search}
            onSearchChange={setSearch}
            selectedStatus={status}
            onStatusChange={setStatus}
            conversations={filteredConversations}
            activeConversationId={activeConversation?.id}
            onSelectConversation={handleSelectConversation}
          />
        )}

        {!isCompact && (
          <div className="hidden px-1 py-1 lg:flex lg:items-stretch lg:justify-center">
            <div className="h-full w-px bg-[#F3F4F6] dark:bg-white/15" />
          </div>
        )}

        {(!isCompact || mobileView === 'chat') && (
          <SupportChatPanel
            conversation={activeConversation}
            onBack={isCompact ? () => setMobileView('list') : undefined}
          />
        )}
      </div>
    </div>
  )
}
