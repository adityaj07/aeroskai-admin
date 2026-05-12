import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const ConfirmUserStatusDialog = ({
  open,
  title,
  description,
  confirmLabel,
  confirmClassName,
  onClose,
  onConfirm,
}) => {
  return (
    <BaseDialog open={open} title={title} onClose={onClose} widthClassName="max-w-[600px]">
      <p className="mb-6 text-start text-xs text-[#6F7680] dark:text-[#A9B0BA]">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="h-10 cursor-pointer border border-[#F3F4F6] bg-[#EAEEF3] text-sm text-[#1F1E1F] hover:bg-[#DEE5EC] dark:border-[#25292E] dark:bg-white/10 dark:text-white"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={onConfirm}
          className={cn('h-10 cursor-pointer text-sm text-white', confirmClassName)}
        >
          {confirmLabel}
        </Button>
      </div>
    </BaseDialog>
  )
}
