import { Mail01Icon, MailValidation02Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes.constants'

import { SendInvoiceEmailDialog } from './dialogs/SendInvoiceEmailDialog'
import { SendRenewalReminderDialog } from './dialogs/SendRenewalReminderDialog'

const actionButtonClass =
  'h-10 w-full justify-center rounded-md text-xs font-semibold transition-colors'

export const CompanySubscriptionAdminActionsCard = ({ details }) => {
  const navigate = useNavigate()
  const [renewalOpen, setRenewalOpen] = useState(false)
  const [invoiceOpen, setInvoiceOpen] = useState(false)

  return (
    <>
      <AdminSectionCard title="Admin Actions" contentClassName="space-y-2.5">
        <Button
          type="button"
          className={`${actionButtonClass} bg-[#1565C0] text-white hover:bg-[#0F54A1]`}
          onClick={() => setRenewalOpen(true)}
        >
          Send Renewal Reminder
        </Button>

        <Button
          type="button"
          variant="secondary"
          className={`${actionButtonClass} bg-[#EAEEF3] text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white`}
          onClick={() => setInvoiceOpen(true)}
        >
          Send Invoice Email
        </Button>

        <Button
          type="button"
          variant="secondary"
          className={`${actionButtonClass} bg-[#EAEEF3] text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white`}
          onClick={() =>
            navigate(`${ROUTES.DASHBOARD}/${ROUTES.COMPANY_DETAIL(details.companyId)}`)
          }
        >
          View Company Profile
        </Button>
      </AdminSectionCard>

      <SendRenewalReminderDialog
        open={renewalOpen}
        onClose={() => setRenewalOpen(false)}
        data={details.renewalReminder}
      />

      <SendInvoiceEmailDialog
        open={invoiceOpen}
        onClose={() => setInvoiceOpen(false)}
        data={details.invoiceEmail}
      />
    </>
  )
}
