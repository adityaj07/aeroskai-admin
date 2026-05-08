import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDebounce } from '@/hooks/useDebounce'
import { UsersTable } from '../components/UsersTable'
import { useUsers } from '../hooks/useUsers'
import { UsersToolbar } from '../components/UsersToolbar'
import { UserStatusSwitcher } from '../components/UserStatusSwitcher'

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

      <UserStatusSwitcher selectedStatus={status} onStatusChange={setStatus} />

      {isLoading ? (
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-white/10 dark:text-[#9AA2AD]">
          Loading users...
        </div>
      ) : (
        <UsersTable users={data?.data} />
      )}
    </motion.div>
  )
}

export default UsersPage
