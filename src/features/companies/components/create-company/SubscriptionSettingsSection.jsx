import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { DatePickerField } from './DatePickerField'
import { RequiredLabel } from './RequiredLabel'
import { inputClassName } from './formStyles'

export const SubscriptionSettingsSection = ({ form }) => {
  return (
    <AdminSectionCard title="Subscription Settings" contentClassName="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Price</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter the price" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.price?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfSeats"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel>Number of Seats</RequiredLabel>
              <FormControl>
                <Input {...field} placeholder="Enter number of users" className={inputClassName} />
              </FormControl>
              <FormMessage>{form.formState.errors.numberOfSeats?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subscriptionStartDate"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel required={false}>Subscription Start Date</RequiredLabel>
              <FormControl>
                <DatePickerField value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage>{form.formState.errors.subscriptionStartDate?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subscriptionEndDate"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel required={false}>Subscription End Date</RequiredLabel>
              <FormControl>
                <DatePickerField value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage>{form.formState.errors.subscriptionEndDate?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>
    </AdminSectionCard>
  )
}
