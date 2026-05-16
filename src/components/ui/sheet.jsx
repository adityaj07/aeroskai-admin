import * as React from 'react'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Dialog as SheetPrimitive } from 'radix-ui'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      data-slot="sheet-overlay"
      className={cn(
        'supports-backdrop-filter:backdrop-blur-xs data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fixed inset-0 z-50 bg-black/80 duration-200 ease-out',
        className
      )}
      {...props}
    />
  )
})
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const SheetContent = React.forwardRef(
  ({ className, children, side = 'right', showCloseButton = true, ...props }, ref) => {
    return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
          ref={ref}
          data-slot="sheet-content"
          data-side={side}
          className={cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[side=bottom]:data-[state=open]:slide-in-from-bottom-4 data-[side=left]:data-[state=open]:slide-in-from-left-4 data-[side=right]:data-[state=open]:slide-in-from-right-4 data-[side=top]:data-[state=open]:slide-in-from-top-4 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[side=bottom]:data-[state=closed]:slide-out-to-bottom-4 data-[side=left]:data-[state=closed]:slide-out-to-left-4 data-[side=right]:data-[state=closed]:slide-out-to-right-4 data-[side=top]:data-[state=closed]:slide-out-to-top-4 fixed z-50 flex flex-col bg-clip-padding text-xs/relaxed shadow-lg transition duration-200 ease-out will-change-transform data-[side=bottom]:inset-x-0 data-[side=left]:inset-y-0 data-[side=right]:inset-y-0 data-[side=top]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=left]:left-0 data-[side=right]:right-0 data-[side=top]:top-0 data-[side=bottom]:h-auto data-[side=left]:h-full data-[side=right]:h-full data-[side=top]:h-auto data-[side=left]:w-3/4 data-[side=right]:w-3/4 data-[side=bottom]:border-t data-[side=left]:border-r data-[side=right]:border-l data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm',
            className
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <SheetPrimitive.Close data-slot="sheet-close" asChild>
              <Button
                variant="ghost"
                className="absolute right-4 top-4 cursor-pointer"
                size="icon-sm"
              >
                <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
                <span className="sr-only">Close</span>
              </Button>
            </SheetPrimitive.Close>
          )}
        </SheetPrimitive.Content>
      </SheetPortal>
    )
  }
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-6', className)}
      {...props}
    />
  )
})
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-6', className)}
      {...props}
    />
  )
})
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <SheetPrimitive.Title
      ref={ref}
      data-slot="sheet-title"
      className={cn('font-heading text-foreground text-sm font-medium', className)}
      {...props}
    />
  )
})
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <SheetPrimitive.Description
      ref={ref}
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-xs/relaxed', className)}
      {...props}
    />
  )
})
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
