import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '@/assets/images/Logo.svg'
import AuthImage from '@/assets/images/AuthImage.png'

const AuthLayout = () => {
  return (
    <div className="bg-background text-foreground relative min-h-screen w-full overflow-x-hidden transition-colors duration-300 md:h-screen md:overflow-hidden">
      {/* Main Container */}
      <div className="flex min-h-screen w-full md:h-full md:overflow-hidden">
        {/* Left Side - Illustration (Hidden on mobile, shown on md and above) */}
        <div className="hidden flex-col items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900 md:flex md:w-1/2">
          <img src={AuthImage} alt="Aeroskai" className="h-full w-full object-cover" />
        </div>

        {/* Right Side - Form Area */}
        <div className="bg-background flex w-full flex-col overflow-y-auto md:w-1/2">
          {/* Content Area - Form Container */}
          <div className="flex min-h-full flex-col items-center px-6 py-8 md:px-12 md:py-12">
            {/* Max Width Container */}
            <div className="my-auto w-full max-w-xl">
              {/* Logo - Positioned above form */}
              <div className="mb-20 flex justify-center">
                <img src={Logo} alt="Aeroskai Logo" className="h-24 w-auto md:h-36" />
              </div>

              {/* Dynamic content from child routes rendered here */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
