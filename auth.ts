import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const config = {
  providers: [Google],
  pages: {
    signIn: "/LoginPage",
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
