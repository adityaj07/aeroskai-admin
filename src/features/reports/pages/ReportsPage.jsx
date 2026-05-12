import { useState } from 'react'
import { motion } from 'framer-motion'

import { useDebounce } from '@/hooks/useDebounce'
import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'

import {
  REPORT_STATUS_FILTERS,
  REPORT_CONTENT_TYPE_FILTERS,
  REPORT_DURATION_FILTERS,
} from '../constants/reports.constants'
import { useReports } from '../hooks/useReports'

import { ReportsToolbar } from '../components/ReportsToolbar'
import { ReportsTable } from '../components/ReportsTable'

const ReportsPage = () => {
  const [status, setStatus] = useState('All')
  const [search, setSearch] = useState('')
  const [contentType, setContentType] = useState('All Content')
  const [duration, setDuration] = useState('Last 30 days')

  const debouncedSearch = useDebounce(search, 250)

  const { data, isLoading } = useReports({
    status,
    search: debouncedSearch,
    contentType,
    duration,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="space-y-5"
    >
      <ReportsToolbar
        search={search}
        onSearchChange={setSearch}
        contentType={contentType}
        contentTypes={REPORT_CONTENT_TYPE_FILTERS}
        onContentTypeChange={setContentType}
        duration={duration}
        durations={REPORT_DURATION_FILTERS}
        onDurationChange={setDuration}
      />

      <StatusSwitcher
        statuses={REPORT_STATUS_FILTERS}
        selectedStatus={status}
        onStatusChange={setStatus}
      />

      {isLoading ? (
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#9AA2AD]">
          Loading reports...
        </div>
      ) : (
        <ReportsTable reports={data?.data} meta={data?.meta} />
      )}
    </motion.div>
  )
}

export default ReportsPage
