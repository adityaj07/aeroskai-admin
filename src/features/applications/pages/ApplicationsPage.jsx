import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants/routes.constants'
import { useDebounce } from '@/hooks/useDebounce'

import { CompaniesStatusSwitcher } from '../components/CompaniesStatusSwitcher'
import { CompaniesTable } from '../components/CompaniesTable'
import { CompaniesToolbar } from '../components/CompaniesToolbar'
import { useCompanies } from '../hooks/useCompanies'

const ApplicationsPage = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('All')
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 250)

  const { data, isLoading } = useApplictions({
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
      <CompaniesToolbar
        search={search}
        onSearchChange={setSearch}
        onCreateCompany={() => navigate(`${ROUTES.DASHBOARD}/${ROUTES.COMPANY_CREATE}`)}
      />

      <CompaniesStatusSwitcher selectedStatus={status} onStatusChange={setStatus} />

      {isLoading ? (
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-white/10 dark:text-[#9AA2AD]">
          Loading companies...
        </div>
      ) : (
        <CompaniesTable companies={data?.data} />
      )}
    </motion.div>
  )
}

export default ApplicationsPage
