import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'

export const ConfirmCompanyActionDialog = ({
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
      <p className="mb-6 text-start text-[12px] leading-relaxed text-[#6F7680] dark:text-[#A9B0BA] sm:text-[13px]">
        {description}
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="h-10 cursor-pointer border border-[#F3F4F6] bg-[#EAEEF3] text-[13px] text-[#1F1E1F] transition-colors hover:bg-[#DEE5EC] dark:border-[#25292E] dark:bg-white/10 dark:text-white dark:hover:bg-white/15 sm:h-11 sm:text-[14px]"
        >
          Cancel
        </Button>

        <Button
          type="button"
          onClick={onConfirm}
          className={`h-10 cursor-pointer text-[13px] text-white transition-colors sm:h-11 sm:text-[14px] ${confirmClassName}`}
        >
          {confirmLabel}
        </Button>
      </div>
    </BaseDialog>
  )
}
