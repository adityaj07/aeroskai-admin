/* eslint-disable react/prop-types */
import { ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const dialogTransition = { duration: 0.2, ease: 'easeOut' }

const inputBaseClass =
  'h-11 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] text-[14px] text-[#1F1E1F] placeholder:text-[#6F7680] focus-visible:ring-1 focus-visible:ring-[#1565C0] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] dark:focus-visible:ring-[#7DB3F2]'

export const ChangePasswordDialog = ({
  open,
  form,
  isSubmitting,
  showCurrentPassword,
  setShowCurrentPassword,
  showNewPassword,
  setShowNewPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  onClose,
  onSubmit,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={dialogTransition}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={dialogTransition}
            className="w-full max-w-[520px] rounded-2xl bg-white p-4 shadow-xl md:p-5 dark:bg-[#121212]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-[#1F1E1F] dark:text-white">Change password</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="inline-flex size-7 items-center justify-center rounded-full text-[#1F1E1F] transition-colors hover:bg-[#F3F4F6] dark:text-white dark:hover:bg-white/10"
              >
                <span className="text-lg leading-none">&times;</span>
              </button>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4">
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[13px] font-semibold text-[#0C1014] dark:text-white">
                        Current Password <span className="text-[#F43F5E]">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showCurrentPassword ? 'text' : 'password'}
                            placeholder="Enter current password"
                            className={`${inputBaseClass} pr-10`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword((prev) => !prev)}
                            aria-label={showCurrentPassword ? 'Hide password' : 'Show password'}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6F7680] transition-colors hover:text-[#1565C0] dark:text-[#A3ACB9] dark:hover:text-white"
                          >
                            <HugeiconsIcon
                              icon={showCurrentPassword ? ViewOffSlashIcon : ViewIcon}
                              size={18}
                              strokeWidth={1.8}
                            />
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-[#F43F5E]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[13px] font-semibold text-[#0C1014] dark:text-white">
                        New Password <span className="text-[#F43F5E]">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showNewPassword ? 'text' : 'password'}
                            placeholder="Create a new password"
                            className={`${inputBaseClass} pr-10`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword((prev) => !prev)}
                            aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6F7680] transition-colors hover:text-[#1565C0] dark:text-[#A3ACB9] dark:hover:text-white"
                          >
                            <HugeiconsIcon
                              icon={showNewPassword ? ViewOffSlashIcon : ViewIcon}
                              size={18}
                              strokeWidth={1.8}
                            />
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-[#F43F5E]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[13px] font-semibold text-[#0C1014] dark:text-white">
                        Confirm Password <span className="text-[#F43F5E]">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Re-enter your new password"
                            className={`${inputBaseClass} pr-10`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6F7680] transition-colors hover:text-[#1565C0] dark:text-[#A3ACB9] dark:hover:text-white"
                          >
                            <HugeiconsIcon
                              icon={showConfirmPassword ? ViewOffSlashIcon : ViewIcon}
                              size={18}
                              strokeWidth={1.8}
                            />
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-[#F43F5E]" />
                    </FormItem>
                  )}
                />

                <p className="text-xs leading-5 text-[#6F7680] dark:text-[#A3ACB9]">
                  Password requirements:
                  <br />- At least 8 characters
                  <br />- Includes a number or symbol
                </p>

                <FormMessage className="text-xs text-[#F43F5E]">{form.formState.errors.root?.message}</FormMessage>

                <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={onClose}
                    className="h-10 border border-[#F3F4F6] bg-[#F3F4F6] text-sm font-medium text-[#1F1E1F] hover:bg-[#E7EAEE] dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 bg-[#1565C0] text-sm text-white hover:bg-[#0F54A1]"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
