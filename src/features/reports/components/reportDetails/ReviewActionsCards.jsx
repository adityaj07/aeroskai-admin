import { HugeiconsIcon } from '@hugeicons/react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Button } from '@/components/ui/button'

import {
  Delete02Icon,
  Edit02Icon,
  UnavailableIcon,
  UserBlock01Icon,
} from '@hugeicons/core-free-icons'

const ActionButton = ({ icon, label, danger = false, onClick }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant="ghost"
      className={`flex h-auto w-full items-center justify-center rounded-[6px] bg-[#F1F5F9] px-4 py-2 text-center text-xs font-semibold hover:bg-[#E5EBF3] dark:bg-white/5 dark:hover:bg-white/10 ${
        danger ? 'text-[#E50914] dark:text-[#F87171]' : 'text-[#111827] dark:text-white'
      }`}
    >
      <HugeiconsIcon icon={icon} size={14} className="mr-1.5 shrink-0" />

      {label}
    </Button>
  )
}

export const ReviewActionsCards = ({
  report,
  onDeleteContent,
  onEditContent,
  onDeactivate,
  onSuspend,
}) => {
  const contentActionLabel = report.entityType === 'comment' ? 'Delete Comment' : 'Delete Post'

  const isReportEntityTypePostOrComment =
    report.entityType === 'post' || report.entityType === 'comment'

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {isReportEntityTypePostOrComment && (
        <AdminSectionCard title="Content Actions" contentClassName="space-y-2.5">
          <ActionButton
            icon={Delete02Icon}
            label={contentActionLabel}
            danger
            onClick={onDeleteContent}
          />

          <ActionButton icon={Edit02Icon} label="Edit Content" onClick={onEditContent} />
        </AdminSectionCard>
      )}

      <AdminSectionCard
        title="User Actions"
        contentClassName="space-y-2.5"
        className={!isReportEntityTypePostOrComment ? 'md:col-span-2' : ''}
      >
        <ActionButton
          icon={UnavailableIcon}
          label="Deactivate User"
          danger
          onClick={onDeactivate}
        />

        <ActionButton icon={UserBlock01Icon} label="Suspend User" onClick={onSuspend} />
      </AdminSectionCard>
    </div>
  )
}
