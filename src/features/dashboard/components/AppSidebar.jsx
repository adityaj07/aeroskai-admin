import * as React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import LogoHorizontal from '@/assets/images/Logo-horizontal.svg'
import { NavMain } from './NavMain'
import { dashboardNavigation } from '../config/MenuConfig'
import { HugeiconsIcon } from '@hugeicons/react'
import { LogOut } from '@hugeicons/core-free-icons'

export function AppSidebar({ ...props }) {
  return (
    <Sidebar className="bg-white dark:bg-background" {...props}>
      <SidebarHeader className="border-sidebar-border flex h-16 items-center justify-center border-b bg-white dark:bg-background">
        <img src={LogoHorizontal} alt="Aeroskai Logo" className="h-8 w-auto" />
      </SidebarHeader>

      <SidebarContent className="bg-white dark:bg-background">
        <NavMain items={dashboardNavigation} />
      </SidebarContent>

      <SidebarFooter className="bg-white p-4 dark:bg-background">
        <Button
          type="button"
          variant="ghost"
          className="px-4.5 flex h-11 w-full items-center justify-start gap-3 rounded-[10px] py-2.5 text-[#6F7680] hover:bg-[#F3F4F6] hover:text-[#1565C0] dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
        >
          <HugeiconsIcon icon={LogOut} size={24} strokeWidth={1.7} className="shrink-0" />
          <span className="text-[14px] font-normal">Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
