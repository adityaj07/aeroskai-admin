import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { ChangePasswordDialog } from '@/features/settings/components/ChangePasswordDialog'
import { SettingsAccountCard } from '@/features/settings/components/SettingsAccountCard'
import { changePasswordSchema } from '@/features/settings/schemas/changePassword.schema'

const accountDefaults = {
  name: 'Admin',
  email: 'Admin@aeroskai.com',
}

const SettingsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  })

  const closeDialog = () => {
    setIsDialogOpen(false)
    setShowCurrentPassword(false)
    setShowNewPassword(false)
    setShowConfirmPassword(false)
    form.reset()
  }

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  const onSubmitPassword = async () => {
    try {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 800))
      toast.success('Password changed successfully')
      closeDialog()
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to change password. Please try again.'

      form.setError('root', { message })
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-full space-y-4 px-4 py-4 md:space-y-6 md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
          className="flex items-center justify-end"
        >
          <Button className="h-10 min-w-[132px] cursor-pointer bg-[#1565C0] text-sm text-white transition-colors hover:bg-[#0F54A1] dark:bg-[#1565C0] dark:hover:bg-[#0F54A1]">
            Save Changes
          </Button>
        </motion.div>

        <SettingsAccountCard account={accountDefaults} onOpenChangePassword={openDialog} />
      </motion.div>

      <ChangePasswordDialog
        open={isDialogOpen}
        form={form}
        isSubmitting={isSubmitting}
        showCurrentPassword={showCurrentPassword}
        setShowCurrentPassword={setShowCurrentPassword}
        showNewPassword={showNewPassword}
        setShowNewPassword={setShowNewPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
        onClose={closeDialog}
        onSubmit={onSubmitPassword}
      />
    </>
  )
}

export default SettingsPage
