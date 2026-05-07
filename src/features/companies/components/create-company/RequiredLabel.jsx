import { FormLabel } from '@/components/ui/form'

import { labelClassName, requiredMarkClassName } from './formStyles'

export const RequiredLabel = ({ children, required = true }) => {
  return (
    <FormLabel className={labelClassName}>
      {children}
      {required && <span className={requiredMarkClassName}>*</span>}
    </FormLabel>
  )
}
