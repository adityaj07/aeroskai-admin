import { breadcrumbConfig } from '@/config/breadcrumb.config'

export const resolveBreadcrumbs = (pathname, dynamicData = {}) => {
  const matched = breadcrumbConfig.find((item) => item.match.test(pathname))

  if (!matched) {
    return [{ label: 'Dashboard' }]
  }

  return matched.items.map((item) => {
    if (item.dynamic) {
      return {
        label: dynamicData[item.dynamic] || 'Details',
      }
    }

    return item
  })
}
