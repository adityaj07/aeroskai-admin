import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes.constants'

import { AdditionalSettingsSection } from '../components/createCompany/AdditionalSettingsSection'
import { CompanyDetailsSection } from '../components/createCompany/CompanyDetailsSection'
import { LogoUploadDialog } from '../components/createCompany/LogoUploadDialog'
import { PrimaryContactSection } from '../components/createCompany/PrimaryContactSection'
import { SubscriptionSettingsSection } from '../components/createCompany/SubscriptionSettingsSection'
import { createCompanySchema } from '../schemas/createCompany.schema'

const defaultValues = {
  businessName: '',
  businessWebsite: '',
  industry: '',
  companySize: '',
  username: '',
  fullName: '',
  roleInCompany: '',
  workEmail: '',
  phoneNumber: '',
  aboutBusiness: '',
  price: '',
  numberOfSeats: '',
  subscriptionStartDate: undefined,
  subscriptionEndDate: undefined,
  markFoundingCompany: false,
  grantFreeAccess: false,
}

const CreateCompanyPage = () => {
  const navigate = useNavigate()
  const [logoDialogOpen, setLogoDialogOpen] = useState(false)
  const [logoFileName, setLogoFileName] = useState('')

  const form = useForm({
    resolver: zodResolver(createCompanySchema),
    defaultValues,
    mode: 'onSubmit',
  })

  const onSubmit = (values) => {
    // console.log('Create Company payload:', values)
    navigate(`${ROUTES.DASHBOARD}/${ROUTES.COMPANIES}`)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <CompanyDetailsSection
              form={form}
              logoFileName={logoFileName}
              onOpenLogoDialog={() => setLogoDialogOpen(true)}
            />

            <PrimaryContactSection form={form} />

            <SubscriptionSettingsSection form={form} />

            <AdditionalSettingsSection form={form} />

            <div className="flex flex-col justify-end gap-2 pb-1 sm:flex-row">
              <Button
                type="button"
                variant="ghost"
                onClick={() => navigate(`${ROUTES.DASHBOARD}/${ROUTES.COMPANIES}`)}
                className="h-10 cursor-pointer cursor-pointer text-sm text-[#1F1E1F] dark:text-white"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-10 cursor-pointer cursor-pointer bg-[#1565C0] p-[12px] text-sm font-semibold text-white hover:bg-[#0F54A1]"
              >
                Create Company
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>

      <LogoUploadDialog
        open={logoDialogOpen}
        onClose={() => setLogoDialogOpen(false)}
        onPickFile={(file) => setLogoFileName(file.name)}
      />
    </>
  )
}

export default CreateCompanyPage
