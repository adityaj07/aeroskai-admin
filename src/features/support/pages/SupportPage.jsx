import { motion } from 'framer-motion'
import { useMemo } from 'react'

import { SupportTabContent } from '../components/SupportTabContent'
import { useCompanySupport } from '../hooks/useCompanySupport'
import { useIndividualSupport } from '../hooks/useIndividualSupport'

const SupportPage = () => {
  const { data: companySupportData, isLoading: companySupportLoading } = useCompanySupport()
  const { data: individualSupportData, isLoading: individualSupportLoading } = useIndividualSupport()

  const companyConversations = useMemo(() => companySupportData?.data ?? [], [companySupportData?.data])
  const individualConversations = useMemo(
    () => individualSupportData?.data ?? [],
    [individualSupportData?.data]
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="h-[calc(100vh-160px)] min-h-[620px]"
    >
      <SupportTabContent
        companyData={companyConversations}
        individualData={individualConversations}
        isLoading={companySupportLoading || individualSupportLoading}
      />
    </motion.div>
  )
}

export default SupportPage
