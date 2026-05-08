import { APPLICATION_STATUS_FILTERS } from '../constants/applications.constants'

export const ApplicationsStatusSwitcher = ({ selectedStatus, onStatusChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-5 border-b border-[#EEF1F4] pt-3 dark:border-white/10">
      {APPLICATION_STATUS_FILTERS.map((status) => {
        const isActive = selectedStatus === status

        return (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
            className={`border-b-2 pb-2 text-xs transition-colors ${
              isActive
                ? 'border-[#1565C0] font-medium text-[#0C1014] dark:text-white'
                : 'border-transparent text-[#6F7680] hover:text-[#0C1014] dark:text-[#9AA2AD] dark:hover:text-white'
            }`}
          >
            {status}
          </button>
        )
      })}
    </div>
  )
}
