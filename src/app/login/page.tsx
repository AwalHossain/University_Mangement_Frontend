import LoginPage from '@/components/login/Login'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "UMS | Login",
    description: "Login Page",
    keywords: "login, login page",
}

const Login = () => {
    return (
        <>
            <LoginPage />
        </>
    )
}

export default Login