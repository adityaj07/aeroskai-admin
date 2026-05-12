export const StatusSwitcher = ({ statuses, selectedStatus, onStatusChange }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max items-center gap-4 border-b border-[#EEF1F4] pt-3 dark:border-[#25292E]">
        {statuses.map((status) => {
          const isActive = selectedStatus === status

          return (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`min-w-18 shrink-0 cursor-pointer whitespace-nowrap border-b-2 pb-2 text-center text-xs transition-colors ${
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
    </div>
  )
}
