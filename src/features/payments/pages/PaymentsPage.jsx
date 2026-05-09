import { motion } from 'framer-motion'
import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PaymentCompaniesSection } from '../components/companies/PaymentCompaniesSection'
import { PaymentUsersSection } from '../components/users/PaymentUsersSection'

const PaymentsPage = () => {
  const [tab, setTab] = useState('companies')

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="space-y-5"
    >
      <Tabs value={tab} onValueChange={setTab} className="flex w-full flex-col">
        <TabsList className="inline-flex h-10 items-center rounded-lg bg-[#F7F9F9] p-1 dark:bg-white/5">
          <TabsTrigger
            value="companies"
            className="h-8 rounded-md px-4 text-xs font-medium text-[#6F7680] transition-colors data-[state=active]:bg-[#1565C0] data-[state=active]:text-white dark:text-[#A9B0BA]"
          >
            Companies
          </TabsTrigger>

          <TabsTrigger
            value="individual-users"
            className="h-8 rounded-md px-4 text-xs font-medium text-[#6F7680] transition-colors data-[state=active]:bg-[#1565C0] data-[state=active]:text-white dark:text-[#A9B0BA]"
          >
            Individual Users
          </TabsTrigger>
        </TabsList>

        <div className="mt-5">
          <TabsContent value="companies" className="m-0 w-full">
            <PaymentCompaniesSection />
          </TabsContent>

          <TabsContent value="individual-users" className="m-0 w-full">
            <PaymentUsersSection />
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  )
}

export default PaymentsPage
