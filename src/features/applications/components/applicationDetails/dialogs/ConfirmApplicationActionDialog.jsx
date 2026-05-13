import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { confirmApplicationActionSchema } from '@/features/applications/schemas/applications.schema'

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
  const form = useForm({
    resolver: zodResolver(confirmApplicationActionSchema),
    defaultValues: {
      reason: '',
    },
    mode: 'onSubmit',
  })

  const closeDialog = () => {
    form.reset({
      reason: '',
    })

    onClose()
  }

  const handleSubmit = (values) => {
    onConfirm(values)
  }

  return (
    <BaseDialog open={open} title={title} onClose={closeDialog} widthClassName="max-w-[600px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <p className="mb-4 text-xs text-[#6F7680] dark:text-[#A9B0BA]">{description}</p>

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <label className="text-xs font-semibold text-[#0C1014] dark:text-white">
                  {label}
                </label>

                <FormControl>
                  <Input
                    {...field}
                    placeholder={placeholder}
                    className="mt-2 h-10 border-[#F3F4F6] bg-[#F7F9F9] text-sm text-[#0C1014] dark:border-[#25292E] dark:bg-white/5 dark:text-white"
                  />
                </FormControl>

                <FormMessage>{form.formState.errors.reason?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="mt-6 grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={closeDialog}
              className="h-10 cursor-pointer border border-[#F3F4F6] bg-[#EAEEF3] text-sm text-[#1F1E1F] hover:bg-[#DEE5EC] dark:border-[#25292E] dark:bg-white/10 dark:text-white"
            >
              Cancel
            </Button>

            <Button type="submit" className={confirmClassName}>
              {confirmLabel}
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}

export default ConfirmApplicationActionDialog
