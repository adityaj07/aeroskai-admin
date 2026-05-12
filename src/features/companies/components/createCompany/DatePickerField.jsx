import { SubscriptionDatePickerField } from '@/features/subscriptions/components/details/company/SubscriptionDatePickerField'

import { inputClassName } from './formStyles'

export const DatePickerField = ({ value, onChange, placeholder = 'dd/mm/yyyy' }) => {
  return (
    <SubscriptionDatePickerField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      triggerClassName={inputClassName}
    />
  )
}
