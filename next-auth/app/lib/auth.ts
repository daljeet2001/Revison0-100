import CredentialsProvider from "next-auth/providers/credentials"
export const AUTH_OPTIONS = {
    providers: [
        CredentialsProvider({
            name: ' Email',
            credentials: {
                username: { label: 'email', type: 'email', placeholder: 'enter your email' },
                password: { label: 'password', type: 'password', placeholder: 'enter your password' }
            },
            async authorize(credentials: any) {
                if (credentials?.username && credentials?.password)
                    return {
                        id: "1",
                        name: "wefwef",
                        email: "fhwiufhwuf"
                    }
                return null;
            }
        }),


    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token, user }: any) => {
            if (session.user) {
                session.user.id = token.sub
            }
            return session;
        }

    }

}