import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useUserDetails } from '../hooks/useUserDetails'
import { UserDetailHeader } from '../components/userDetails/UserDetailHeader'
import UserDetailInfoCard from '../components/userDetails/UserDetailInfoCard'
import { UserStatusBadge } from '../components/UserStatusBadge'
import { ConfirmUserStatusDialog } from '../components/userDetails/dialogs/ConfirmUserStatusDialog'
import { usersService } from '../services/user.service'
import { USERS_QUERY_KEYS } from '../constants/users.constants'

const UserDetailsPage = () => {
  const { userId } = useParams()
  const { data, isLoading } = useUserDetails(userId)
  const [deactivateOpen, setDeactivateOpen] = useState(false)
  const [activateOpen, setActivateOpen] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(null)
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ({ id, status }) => usersService.updateStatus(id, status),
    onSuccess: (_, variables) => {
      const nextStatus = variables?.status

      queryClient.setQueryData(['users', 'details', userId], (currentData) =>
        currentData
          ? {
              ...currentData,
              status: nextStatus,
              subscription: { ...currentData.subscription, status: nextStatus },
            }
          : currentData
      )
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEYS.list })
      queryClient.invalidateQueries({ queryKey: ['users', 'details', userId] })

      if (nextStatus) {
        setCurrentStatus(nextStatus)
      }
    },
  })

  const handleOpenConfirm = () => {
    if ((currentStatus ?? data?.status) === 'Active') setDeactivateOpen(true)
    else setActivateOpen(true)
  }
  if (isLoading) {
    return (
      <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-white/10 dark:text-[#A9B0BA]">
        Loading user details...
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#D7DCE2] bg-[#F9FBFC] px-6 py-10 text-center dark:border-white/10 dark:bg-[#15181C]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAEEF3] dark:bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6 text-[#8A93A0] dark:text-[#A9B0BA]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.29 3.86l-7.4 12.82A2 2 0 0 0 4.63 20h14.74a2 2 0 0 0 1.74-3.32l-7.4-12.82a2 2 0 0 0-3.46 0Z"
            />
          </svg>
        </div>

        <h2 className="mt-5 text-lg font-semibold text-[#0C1014] dark:text-white">
          User details unavailable
        </h2>

        <p className="mt-2 max-w-[340px] text-sm leading-relaxed text-[#6F7680] dark:text-[#A9B0BA]">
          We couldn&apos;t load the requested user information. The user may no longer exist or the
          data is temporarily unavailable.
        </p>
      </div>
    )
  }

  const basicInfo = [
    { label: 'Username', value: data?.username ?? '' },
    { label: 'Full Name', value: data?.fullName ?? '' },
    { label: 'Email', value: data?.email ?? '' },
    { label: 'Phone Number', value: data?.phoneNumber ?? '' },
  ]

  const pd = data?.professionalDetails ?? {}

  const professionalDetails = [
    { label: 'Role', value: pd.role ?? '' },
    { label: 'Sector', value: pd.sector ?? '' },
    { label: 'Goals', value: pd.goals ?? '' },
    { label: 'How did you hear about Aeroskai?', value: pd.referral ?? '' },
  ]

  const act = data?.activity ?? {}
  const activity = [
    { label: 'Posts', value: act.posts ?? 0 },
    { label: 'Followers', value: act.followers ?? '0' },
    { label: 'Following', value: act.following ?? 0 },
  ]

  const acct = data?.account ?? {}
  const account = [
    { label: 'Account Type', value: acct.accountType ?? '' },
    { label: 'Date Joined', value: acct.dateJoined ?? '' },
    { label: 'Last Login', value: acct.lastLogin ?? '' },
  ]

  const sub = data?.subscription ?? {}
  const subscription = [
    { label: 'Plan', value: sub.plan ?? '' },
    { label: 'Start Date', value: sub.startDate ?? '' },
    { label: 'End Date', value: sub.endDate ?? '' },
    { label: 'Status', value: sub.status ? <UserStatusBadge status={sub.status} /> : '' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full min-w-0 space-y-4"
    >
      <UserDetailHeader
        details={{ ...data, status: currentStatus ?? data.status }}
        onToggleStatus={handleOpenConfirm}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <UserDetailInfoCard title="Basic Information" items={basicInfo} />

        <UserDetailInfoCard title="Professional Details" items={professionalDetails} />

        <UserDetailInfoCard title="Activity" items={activity} />

        <UserDetailInfoCard title="Account" items={account} />
      </div>

      <div className="mt-4">
        <UserDetailInfoCard title="Subscription Details" items={subscription} />
      </div>

      <ConfirmUserStatusDialog
        open={deactivateOpen}
        title="Deactivate account?"
        description={
          "This will restrict the user's access to the platform. They will not be able to log in or use features."
        }
        confirmLabel="Yes, Deactivate"
        confirmClassName="bg-[#DC2626] hover:bg-[#B91C1C]"
        onClose={() => setDeactivateOpen(false)}
        onConfirm={() => {
          mutation.mutate({ id: data.id, status: 'Inactive' })
          setCurrentStatus('Inactive')
          setDeactivateOpen(false)
        }}
      />

      <ConfirmUserStatusDialog
        open={activateOpen}
        title="Activate account?"
        description={
          "This will restore the user's access to the platform. They will be able to log in and use features."
        }
        confirmLabel="Yes, Activate"
        confirmClassName="bg-[#1565C0] hover:bg-[#0F54A1]"
        onClose={() => setActivateOpen(false)}
        onConfirm={() => {
          mutation.mutate({ id: data.id, status: 'Active' })
          setCurrentStatus('Active')
          setActivateOpen(false)
        }}
      />
    </motion.div>
  )
}

export default UserDetailsPage
