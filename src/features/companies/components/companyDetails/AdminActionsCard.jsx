import { ArrowUpRight01Icon, Mail01Icon, MailValidation02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

import { ConfirmCompanyActionDialog } from './dialogs/ConfirmCompanyActionDialog'
import { ManageSubscriptionDialog } from './dialogs/ManageSubscriptionDialog'
import { SendNormalEmailDialog } from './dialogs/SendNormalEmailDialog'
import { SendSubscriptionEmailDialog } from './dialogs/SendSubscriptionEmailDialog'

const toggleContainerClass =
  'flex items-center justify-between rounded-lg bg-[#F7F9F9] p-3 dark:bg-white/5'

const linkItemClass =
  'flex items-center justify-between rounded-lg bg-[#F7F9F9] p-3 dark:bg-white/5 text-left w-full'

export const AdminActionsCard = ({ details }) => {
  const [manageSubOpen, setManageSubOpen] = useState(false)
  const [subscriptionEmailOpen, setSubscriptionEmailOpen] = useState(false)
  const [normalEmailOpen, setNormalEmailOpen] = useState(false)

  const [isActive, setIsActive] = useState(details.status === 'Active')
  const [foundingBadge, setFoundingBadge] = useState(details.foundingCompany)

  const [deactivateOpen, setDeactivateOpen] = useState(false)
  const [activateOpen, setActivateOpen] = useState(false)
  const [removeBadgeOpen, setRemoveBadgeOpen] = useState(false)
  const [assignBadgeOpen, setAssignBadgeOpen] = useState(false)

  return (
    <>
      <AdminSectionCard title="Admin Actions" contentClassName="space-y-3">
        <Button
          type="button"
          onClick={() => setManageSubOpen(true)}
          className="h-10 w-full bg-[#1565C0] text-xs text-white hover:bg-[#0F54A1]"
        >
          Edit Subscription
        </Button>

        <div className={toggleContainerClass}>
          <div>
            <p className="text-base text-[#0C1014] dark:text-white">Account Status</p>
            <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">
              Enable access to the platform
            </p>
          </div>
          <Switch
            checked={isActive}
            onCheckedChange={(checked) =>
              checked ? setActivateOpen(true) : setDeactivateOpen(true)
            }
            className="data-checked:bg-[#1565C0] data-[state=checked]:bg-[#1565C0]"
          />
        </div>

        <div className={toggleContainerClass}>
          <div>
            <p className="text-base text-[#0C1014] dark:text-white">Founding Company Badge</p>
            <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">
              Display badge across the platform
            </p>
          </div>
          <Switch
            checked={foundingBadge}
            onCheckedChange={(checked) =>
              checked ? setAssignBadgeOpen(true) : setRemoveBadgeOpen(true)
            }
            className="data-checked:bg-[#1565C0] data-[state=checked]:bg-[#1565C0]"
          />
        </div>

        <button className={linkItemClass} onClick={() => setSubscriptionEmailOpen(true)}>
          <span className="inline-flex items-center gap-2 text-base text-[#0C1014] dark:text-white">
            <HugeiconsIcon icon={MailValidation02Icon} size={16} className="text-[#1565C0]" />
            Send Subscription Email
          </span>
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
        </button>

        <button className={linkItemClass} onClick={() => setNormalEmailOpen(true)}>
          <span className="inline-flex items-center gap-2 text-base text-[#0C1014] dark:text-white">
            <HugeiconsIcon icon={Mail01Icon} size={16} className="text-[#1565C0]" />
            Send Normal Email
          </span>
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
        </button>
      </AdminSectionCard>

      <ManageSubscriptionDialog
        open={manageSubOpen}
        data={details.subscription}
        onClose={() => setManageSubOpen(false)}
      />

      <ConfirmCompanyActionDialog
        open={deactivateOpen}
        title="Deactivate account?"
        description="This will restrict the company's access to the platform."
        confirmLabel="Yes, Deactivate"
        confirmClassName="bg-[#DC2626] hover:bg-[#B91C1C]"
        onClose={() => setDeactivateOpen(false)}
        onConfirm={() => {
          setIsActive(false)
          setDeactivateOpen(false)
        }}
      />

      <ConfirmCompanyActionDialog
        open={activateOpen}
        title="Activate account?"
        description="This will restore full access for the company and its employees."
        confirmLabel="Yes, Activate"
        confirmClassName="bg-[#1565C0] hover:bg-[#0F54A1]"
        onClose={() => setActivateOpen(false)}
        onConfirm={() => {
          setIsActive(true)
          setActivateOpen(false)
        }}
      />

      <ConfirmCompanyActionDialog
        open={removeBadgeOpen}
        title="Remove founding company badge?"
        description="This will remove the badge from the company profile and posts."
        confirmLabel="Remove Badge"
        confirmClassName="bg-[#DC2626] hover:bg-[#B91C1C]"
        onClose={() => setRemoveBadgeOpen(false)}
        onConfirm={() => {
          setFoundingBadge(false)
          setRemoveBadgeOpen(false)
        }}
      />

      <ConfirmCompanyActionDialog
        open={assignBadgeOpen}
        title="Assign founding company badge?"
        description="This will display the founding company badge on profile and posts."
        confirmLabel="Assign Badge"
        confirmClassName="bg-[#1565C0] hover:bg-[#0F54A1]"
        onClose={() => setAssignBadgeOpen(false)}
        onConfirm={() => {
          setFoundingBadge(true)
          setAssignBadgeOpen(false)
        }}
      />

      <SendSubscriptionEmailDialog
        open={subscriptionEmailOpen}
        toEmail={details.primaryContact.find((item) => item.label === 'Work Email')?.value}
        onClose={() => setSubscriptionEmailOpen(false)}
      />

      <SendNormalEmailDialog
        open={normalEmailOpen}
        toEmail={details.email || 'contact@skyjet.com'}
        onClose={() => setNormalEmailOpen(false)}
      />
    </>
  )
}
