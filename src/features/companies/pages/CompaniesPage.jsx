import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants/routes.constants'
import { useDebounce } from '@/hooks/useDebounce'

import { CompaniesTable } from '../components/CompaniesTable'
import { CompaniesToolbar } from '../components/CompaniesToolbar'
import { useCompanies } from '../hooks/useCompanies'
import { COMPANY_STATUS_FILTERS } from '../constants/companies.constants'
import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'

const CompaniesPage = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('All')
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 250)

  const { data, isLoading } = useCompanies({
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

      <StatusSwitcher
        statuses={COMPANY_STATUS_FILTERS}
        selectedStatus={status}
        onStatusChange={setStatus}
      />

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

export default CompaniesPage
