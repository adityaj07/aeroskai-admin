import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const ConfirmApplicationActionDialog = ({
  open,
  title,
  description,
  label,
  placeholder,
  confirmLabel,
  confirmClassName,
  onClose,
  onConfirm,
}) => {
  return (
    <BaseDialog open={open} title={title} onClose={onClose} widthClassName="max-w-[600px]">
      <p className="mb-4 text-xs text-[#6F7680] dark:text-[#A9B0BA]">{description}</p>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-[#0C1014] dark:text-white">{label}</label>
        <Input
          placeholder={placeholder}
          className="h-10 border-[#F3F4F6] bg-[#F7F9F9] text-sm text-[#0C1014] dark:border-white/10 dark:bg-white/5 dark:text-white"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="h-10 border border-[#F3F4F6] bg-[#EAEEF3] text-sm text-[#1F1E1F] hover:bg-[#DEE5EC] dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          Cancel
        </Button>
        <Button type="button" onClick={onConfirm} className={confirmClassName}>
          {confirmLabel}
        </Button>
      </div>
    </BaseDialog>
  )
}

export default ConfirmApplicationActionDialog
