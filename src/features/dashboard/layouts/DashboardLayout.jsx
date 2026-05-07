import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/routes.constants'
import { AppSidebar } from '../components/AppSidebar'
import { dashboardNavigation } from '../config/MenuConfig'
import { ModeToggle } from '@/components/ui/mode-toggle'

const DashboardLayout = () => {
  const location = useLocation()

  const resolveDashboardPath = (url) => {
    if (url.startsWith('/')) return url
    return `${ROUTES.DASHBOARD}/${url}`
  }

  const normalizePath = (path) => (path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path)

  const pathname = normalizePath(location.pathname)

  const currentPage = dashboardNavigation.find((item) => {
    const itemPath = normalizePath(resolveDashboardPath(item.url))

    if (itemPath === ROUTES.DASHBOARD) {
      return pathname === ROUTES.DASHBOARD
    }

    return pathname === itemPath || pathname.startsWith(`${itemPath}/`)
  })

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0">
        <header className="bg-background/95 sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 backdrop-blur">
          <div className="flex items-center justify-between gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[16px] font-bold text-[#1F1E1F] dark:text-white">
                    {currentPage?.title || 'Dashboard'}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center">
            <ModeToggle />
          </div>
        </header>
        <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-x-hidden p-4">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="bg-muted/50 aspect-square rounded-xl" />
            ))}
          </div> */}
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
