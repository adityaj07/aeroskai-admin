import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { RequiredLabel } from './RequiredLabel'
import { inputClassName } from './formStyles'

export const PrimaryContactSection = ({ form }) => {
  return (
    <AdminSectionCard title="Primary Contact" contentClassName="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Username</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter unique name" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.username?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Full Name</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter full name" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.fullName?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="roleInCompany"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Role in Company</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter role in company" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.roleInCompany?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Work Email</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter work email address" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.workEmail?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Phone Number</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter phone number" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.phoneNumber?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="aboutBusiness"
        render={({ field }) => (
          <FormItem>
            <RequiredLabel>Tell us about your business</RequiredLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="What does your company do, and who do you serve in aviation?"
                className={`${inputClassName} max-h-[132px] min-h-[92px] overflow-y-auto resize-y`}
              />
            </FormControl>
            <FormMessage>{form.formState.errors.aboutBusiness?.message}</FormMessage>
          </FormItem>
        )}
      />
    </AdminSectionCard>
  )
}
