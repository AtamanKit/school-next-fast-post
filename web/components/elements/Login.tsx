import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Login = () => {
  return (
    <>
        <Button variant="outline">
          <Link href="/api/auth/signin">Sign In</Link>
        </Button>
        <Button variant="outline">Register</Button>
    </>
  )
}

export default Login