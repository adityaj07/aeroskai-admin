import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '@/assets/images/Logo.svg'
import AuthImage from '@/assets/images/AuthImage.png'

const AuthLayout = () => {
  return (
    <div className="bg-background text-foreground relative h-screen w-full overflow-hidden transition-colors duration-300">
      {/* Main Container */}
      <div className="flex h-full w-full overflow-hidden">
        {/* Left Side - Illustration (Hidden on mobile, shown on md and above) */}
        <div className="hidden flex-col items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900 md:flex md:w-1/2">
          <img src={AuthImage} alt="Aeroskai" className="h-full w-full object-cover" />
        </div>

        {/* Right Side - Form Area */}
        <div className="bg-background flex w-full flex-col md:w-1/2">
          {/* Content Area - Form Container */}
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-8 md:px-12 md:py-12">
            {/* Max Width Container */}
            <div className="w-full max-w-md">
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
