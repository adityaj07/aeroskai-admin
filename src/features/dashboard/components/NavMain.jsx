import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import { HugeiconsIcon } from '@hugeicons/react'

import { SidebarGroup, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'
import { ROUTES } from '@/constants/routes.constants'

export function NavMain({ items }) {
  const location = useLocation()

  const resolveDashboardPath = (url) => {
    if (url.startsWith('/')) return url
    return `${ROUTES.DASHBOARD}/${url}`
  }

  const normalizePath = (path) => (path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path)

  return (
    <SidebarGroup className="px-[10px] py-4">
      <SidebarMenu className="flex gap-2">
        {items.map((item) => {
          const itemPath = normalizePath(resolveDashboardPath(item.url))
          const currentPath = normalizePath(location.pathname)

          const isActive =
            itemPath === ROUTES.DASHBOARD
              ? currentPath === ROUTES.DASHBOARD
              : currentPath === itemPath || currentPath.startsWith(`${itemPath}/`)

          return (
            <SidebarMenuItem key={item.title}>
              <NavLink
                to={itemPath}
                className={clsx(
                  'group/nav-item flex h-11 w-full items-center gap-2 rounded-[8px] px-[18px] py-[10px] transition-all duration-200',
                  isActive
                    ? 'bg-[#F3F4F6] text-[#1565C0] dark:bg-white/10 dark:text-white'
                    : 'bg-transparent text-[#6F7680] hover:bg-[#F3F4F6] hover:text-[#1565C0] dark:text-white dark:hover:bg-white/10 dark:hover:text-white'
                )}
              >
                <HugeiconsIcon
                  icon={item.icon}
                  size={24}
                  strokeWidth={1.7}
                  className={clsx(
                    'shrink-0 transition-colors',
                    isActive
                      ? 'text-[#1565C0] dark:text-white'
                      : 'text-[#6F7680] group-hover/nav-item:text-[#1565C0] dark:text-white dark:group-hover/nav-item:text-white'
                  )}
                />

                <span
                  className={clsx(
                    'text-[14px]',
                    isActive
                      ? 'font-medium text-[#1565C0] dark:text-white'
                      : 'font-normal text-[#6F7680] group-hover/nav-item:text-[#1565C0] dark:text-white dark:group-hover/nav-item:text-white'
                  )}
                >
                  {item.title}
                </span>

                {item.badge && (
                  <div className="ml-auto flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#1565C0] text-[10px] font-medium leading-none text-white">
                    {item.badge}
                  </div>
                )}
              </NavLink>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
