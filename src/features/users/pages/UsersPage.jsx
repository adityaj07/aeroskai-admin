import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDebounce } from '@/hooks/useDebounce'
import { UsersTable } from '../components/UsersTable'
import { useUsers } from '../hooks/useUsers'
import { UsersToolbar } from '../components/UsersToolbar'
import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'
import { USER_STATUS_FILTERS } from '../constants/users.constants'

const UsersPage = () => {
  const [status, setStatus] = useState('All')
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 250)

  const { data, isLoading } = useUsers({
    status,
    search: debouncedSearch,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="space-y-5"
    >
      <UsersToolbar search={search} onSearchChange={setSearch} />

      <StatusSwitcher
        statuses={USER_STATUS_FILTERS}
        selectedStatus={status}
        onStatusChange={setStatus}
      />

      {isLoading ? (
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#9AA2AD]">
          Loading users...
        </div>
      ) : (
        <UsersTable users={data?.data} />
      )}
    </motion.div>
  )
}

export default UsersPage
