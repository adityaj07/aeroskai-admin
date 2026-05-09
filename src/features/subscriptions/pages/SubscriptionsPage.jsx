import { motion } from 'framer-motion'
import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { SubscriptionCompaniesSection } from '../components/companies/SubscriptionCompaniesSection'
import { SubscriptionUsersSection } from '../components/users/SubscriptionUsersSection'

const SubscriptionsPage = () => {
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

        <div className="mt-5">
          <TabsContent value="companies" className="m-0 w-full">
            <SubscriptionCompaniesSection />
          </TabsContent>

          <TabsContent value="individual-users" className="m-0 w-full">
            <SubscriptionUsersSection />
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  )
}

export default SubscriptionsPage
