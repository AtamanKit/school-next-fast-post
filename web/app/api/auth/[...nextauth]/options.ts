import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'


export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Type your email" },
                password: {  label: "Password", type: "password", placeholder: "Type your password" }
            },
            async authorize(credentials) {
                const user = { id: "1", name: 'Rodion', password: 'nextauth'}

                if (credentials?.username === user.name && credentials.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}
