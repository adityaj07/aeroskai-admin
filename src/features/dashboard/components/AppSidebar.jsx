import { LogOut } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import * as React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import LogoHorizontal from '@/assets/images/Logo-horizontal.svg'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar'
import { ROUTES } from '@/constants/routes.constants'

import { dashboardNavigation } from '../config/MenuConfig'

import { NavMain } from './NavMain'
import { ConfirmLogoutDialog } from './dialogs/ConfirmLogoutDialog'

export function AppSidebar({ ...props }) {
  const navigate = useNavigate()
  const { isMobile, setOpenMobile } = useSidebar()

  const [logoutOpen, setLogoutOpen] = useState(false)

  const handleSidebarItemClick = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }, [isMobile, setOpenMobile])

  const handleLogout = () => {
    localStorage.removeItem('token')

    toast.success('Logged out successfully')

    navigate(ROUTES.LOGIN)
  }

  return (
    <>
      <Sidebar className="dark:bg-background bg-white" {...props}>
        <SidebarHeader className="border-sidebar-border dark:bg-background flex h-16 items-center justify-center border-b bg-white">
          <img src={LogoHorizontal} alt="Aeroskai Logo" className="h-8 w-auto" />
        </SidebarHeader>

        <SidebarContent className="dark:bg-background bg-white">
          <NavMain items={dashboardNavigation} onItemClick={handleSidebarItemClick} />
        </SidebarContent>

        <SidebarFooter className="dark:bg-background bg-white p-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setLogoutOpen(true)}
            className="px-4.5 flex h-11 w-full cursor-pointer items-center justify-start gap-3 rounded-[10px] py-2.5 text-[#6F7680] hover:bg-[#F3F4F6] hover:text-[#1565C0] dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
          >
            <HugeiconsIcon icon={LogOut} size={24} strokeWidth={1.7} className="shrink-0" />

            <span className="text-[14px] font-normal">Logout</span>
          </Button>
        </SidebarFooter>
      </Sidebar>

      <ConfirmLogoutDialog
        open={logoutOpen}
        title="Logout?"
        description="Are you sure you want to logout from your account?"
        confirmLabel="Yes, Logout"
        confirmClassName="bg-[#DC2626] hover:bg-[#B91C1C]"
        onClose={() => setLogoutOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  )
}
