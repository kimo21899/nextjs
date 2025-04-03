import React from 'react';

const AuthLayout = ({ children} : {children: React.ReactNode}) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-t from-sky-400 to-blue-800">
      <div className="h-10 v-20 bg-black text-white">Auth Navbar</div>
      {children}
    </div>
  )
}

export default AuthLayout
