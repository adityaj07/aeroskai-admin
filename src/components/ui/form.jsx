import * as React from 'react'
import { Controller, FormProvider, useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

const Form = FormProvider

const FormField = ({ ...props }) => {
  return <Controller {...props} />
}

const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('space-y-2', className)} {...props} />
})

FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  return <Label ref={ref} className={cn(className)} {...props} />
})

FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn(className)} {...props} />
})

FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  return <p ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
})

FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { formState } = useFormContext()
  const message = children || formState.errors?.root?.message

  if (!message) {
    return null
  }

  return (
    <p ref={ref} className={cn('text-destructive text-sm font-medium', className)} {...props}>
      {String(message)}
    </p>
  )
})

FormMessage.displayName = 'FormMessage'

export { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
