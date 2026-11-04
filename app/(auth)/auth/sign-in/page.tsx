import SignInFormClient from '@/features/auth/components/sign-in-form-client'
import Link from 'next/link'

const SignInPage = () => {
  return (
    <>
        <Link href="/" className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground">
            vibecode editor
        </Link>
        <SignInFormClient/>
    </>
  )
}

export default SignInPage
