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

const toggleContainerClass = 'flex items-start justify-between gap-3 rounded-lg bg-transparent p-3'

const linkItemClass =
  'flex w-full items-center justify-between gap-3 rounded-lg bg-transparent p-3 text-left transition-colors hover:bg-[#F7F9F9] dark:hover:bg-white/5 cursor-pointer'

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
          className="h-10 w-full cursor-pointer bg-[#1565C0] px-6 text-[13px] text-[#F7F9F9] hover:bg-[#0F54A1] sm:h-11 sm:text-[14px]"
        >
          Edit Subscription
        </Button>

        <div className={toggleContainerClass}>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium text-[#0C1014] dark:text-[#F7F9F9] sm:text-[14px] lg:text-[15px]">
              Account Status
            </p>

            <p className="mt-1 text-[11px] leading-relaxed text-[#6F7680] dark:text-[#A9B0BA] sm:text-[12px]">
              Enable access to the platform
            </p>
          </div>

          <Switch
            checked={isActive}
            onCheckedChange={(checked) =>
              checked ? setActivateOpen(true) : setDeactivateOpen(true)
            }
            className="mt-0.5 cursor-pointer data-[state=checked]:bg-[#1565C0]"
          />
        </div>

        <div className={toggleContainerClass}>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium text-[#0C1014] dark:text-[#F7F9F9] sm:text-[14px] lg:text-[15px]">
              Founding Company Badge
            </p>

            <p className="mt-1 text-[11px] leading-relaxed text-[#6F7680] dark:text-[#A9B0BA] sm:text-[12px]">
              Display badge across the platform
            </p>
          </div>

          <Switch
            checked={foundingBadge}
            onCheckedChange={(checked) =>
              checked ? setAssignBadgeOpen(true) : setRemoveBadgeOpen(true)
            }
            className="mt-0.5 cursor-pointer data-[state=checked]:bg-[#1565C0]"
          />
        </div>

        <button className={linkItemClass} onClick={() => setSubscriptionEmailOpen(true)}>
          <span className="inline-flex min-w-0 items-center gap-2">
            <HugeiconsIcon
              icon={MailValidation02Icon}
              size={20}
              className="shrink-0 text-[#1565C0] sm:size-6"
            />

            <span className="truncate text-[13px] font-medium text-[#0C1014] dark:text-[#F7F9F9] sm:text-[14px] lg:text-[15px]">
              Send Subscription Email
            </span>
          </span>

          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            className="shrink-0 text-[#6F7680] dark:text-[#A9B0BA]"
          />
        </button>

        <button className={linkItemClass} onClick={() => setNormalEmailOpen(true)}>
          <span className="inline-flex min-w-0 items-center gap-2">
            <HugeiconsIcon
              icon={Mail01Icon}
              size={20}
              className="shrink-0 text-[#1565C0] sm:size-6"
            />

            <span className="truncate text-[13px] font-medium text-[#0C1014] dark:text-[#F7F9F9] sm:text-[14px] lg:text-[15px]">
              Send Normal Email
            </span>
          </span>

          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={18}
            className="shrink-0 text-[#6F7680] dark:text-[#A9B0BA]"
          />
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
