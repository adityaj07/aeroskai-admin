import { Link, Outlet, useLocation } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { resolveBreadcrumbs } from '@/utils/resolveBreadcrumbs'

import { AppSidebar } from '../components/AppSidebar'

const DashboardLayout = () => {
  const location = useLocation()
  const normalizePath = (path) => (path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path)
  const pathname = normalizePath(location.pathname)

  const breadcrumbItems = resolveBreadcrumbs(pathname)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0">
        <header className="bg-background/95 sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 backdrop-blur">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <SidebarTrigger className="-ml-1 md:hidden" />
            <Breadcrumb className="min-w-0 flex-1">
              <BreadcrumbList className="min-w-0 flex-nowrap overflow-hidden">
                {breadcrumbItems.map((item, index) => {
                  const isLast = index === breadcrumbItems.length - 1

                  return (
                    <div
                      key={item.label}
                      className={`min-w-0 items-center ${isLast ? 'flex' : 'hidden sm:flex'}`}
                    >
                      <BreadcrumbItem>
                        {isLast || !item.to ? (
                          <BreadcrumbPage className="truncate text-[13px] font-bold text-[#1F1E1F] dark:text-white sm:text-[16px]">
                            {item.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link
                              to={item.to}
                              className="truncate text-[13px] font-medium text-[#6F7680] hover:text-[#1565C0] dark:text-[#A9B0BA] dark:hover:text-white sm:text-[16px]"
                            >
                              {item.label}
                            </Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>

                      {!isLast && <span className="mx-2 hidden text-xl font-medium sm:inline">/</span>}
                    </div>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-3">
            <ModeToggle />

            <Separator orientation="vertical" className="h-6 w-px bg-[#E5E7EB] dark:bg-[#D1D5DB]" />

            <div className="flex h-9 items-center rounded-md border border-[#E5E7EB] px-5 py-[12px] text-xs font-semibold text-[#1565C0] dark:border-[#25292E] dark:text-[#60A5FA]">
              Admin
            </div>
          </div>
        </header>
        <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-x-hidden p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
