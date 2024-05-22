import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page"

export const options: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@gmail.com"},
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch(`http://localhost:8000/api/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                const user = await res.json();
                if(user?.code === 200 && user?.data?.access_token) {
                    return user?.data;
                }
                throw new Error(user?.status);
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {            
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session = { ...session, ...token, ...user };
            return session;
        },
    }
}