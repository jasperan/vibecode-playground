import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6">
        {children}
    </main>
  )
}

export default AuthLayout
