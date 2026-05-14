import React from 'react'

const EmptyState = ({ title, description }) => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#D7DCE2] bg-[#F9FBFC] px-6 py-10 text-center dark:border-[#25292E] dark:bg-[#15181C]">
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

      <h2 className="mt-5 text-lg font-semibold text-[#0C1014] dark:text-white">{title}</h2>

      <p className="mt-2 max-w-[340px] text-sm leading-relaxed text-[#6F7680] dark:text-[#A9B0BA]">
        {description}
      </p>
    </div>
  )
}

export default EmptyState
