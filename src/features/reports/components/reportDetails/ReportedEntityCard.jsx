import { UserCircleIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes.constants'

const ReportedPost = ({ data }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 overflow-hidden rounded-full bg-[#E7EEF8]">
          {data.authorAvatar ? (
            <img src={data.authorAvatar} alt={data.author} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[#1565C0]">
              <HugeiconsIcon icon={UserCircleIcon} size={16} />
            </div>
          )}
        </div>

        <p className="text-xs font-semibold text-[#0C1014] dark:text-white">{data.author}</p>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-[#EEF1F4] dark:border-[#25292E]">
        <img src={data.image} alt="Reported content" className="h-44 w-full object-cover sm:h-56" />
      </div>

      <p className="text-xs leading-relaxed text-[#4B5563] dark:text-[#C2C7D0]">{data.caption}</p>

      <p className="text-[11px] text-[#9AA2AD]">{data.timeAgo}</p>
    </div>
  )
}

const ReportedUser = ({ data }) => {
  const rawKey = data.id ?? data.handle ?? data.username ?? ''
  const profileKey = rawKey?.toString().replace(/^@/, '').toLowerCase()

  return (
    <div className="flex flex-col gap-4 rounded-[12px] border border-[#EEF1F4] bg-[#F7F9F9] p-4 dark:border-[#25292E] dark:bg-white/5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#E7EEF8] sm:h-[86px] sm:w-[86px]">
          {data.avatar ? (
            <img src={data.avatar} alt={data.handle} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[#1565C0]">
              <HugeiconsIcon icon={UserCircleIcon} size={34} className="sm:hidden" />

              <HugeiconsIcon icon={UserCircleIcon} size={44} className="hidden sm:block" />
            </div>
          )}
        </div>

        <div className="min-w-0 space-y-1">
          <p className="truncate text-sm font-bold text-[#0C1014] dark:text-white">{data.handle}</p>

          <p className="truncate text-xs text-[#6F7680] dark:text-[#A9B0BA]">{data.fullName}</p>

          <p className="break-all text-xs text-[#6F7680] dark:text-[#A9B0BA] sm:truncate">
            {data.email}
          </p>
        </div>
      </div>

      <Link
        to={`${ROUTES.DASHBOARD}/${ROUTES.USER_DETAIL(profileKey)}`}
        className="inline-flex w-full items-center justify-center rounded-md  px-4 py-2 text-center text-xs font-semibold text-[#1565C0] transition-colors dark:text-[#60A5FA] sm:w-auto sm:shrink-0"
      >
        View Profile
      </Link>
    </div>
  )
}

const ReportedComment = ({ data }) => {
  return (
    <div className="flex gap-3 rounded-lg border border-[#EEF1F4] bg-[#FAFBFC] p-3 dark:border-[#25292E] dark:bg-white/5">
      <div className="h-12 w-16 shrink-0 overflow-hidden rounded-md border border-[#E5E7EB] dark:border-[#25292E]">
        <img src={data.image} alt="Comment attachment" className="h-full w-full object-cover" />
      </div>

      <div className="min-w-0">
        <p className="text-xs leading-relaxed text-[#4B5563] dark:text-[#C2C7D0]">{data.comment}</p>

        <p className="mt-1 text-[11px] text-[#9AA2AD]">{data.timeAgo}</p>
      </div>
    </div>
  )
}

export const ReportedEntityCard = ({ report }) => {
  const cardTitle =
    report.entityType === 'post'
      ? 'Reported Content'
      : report.entityType === 'user'
        ? 'Reported User'
        : 'Reported Comment'

  return (
    <AdminSectionCard title={cardTitle}>
      {report.entityType === 'post' && <ReportedPost data={report.reportedEntity} />}

      {report.entityType === 'user' && <ReportedUser data={report.reportedEntity} />}

      {report.entityType === 'comment' && <ReportedComment data={report.reportedEntity} />}
    </AdminSectionCard>
  )
}
