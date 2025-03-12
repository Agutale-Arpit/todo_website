import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id
      return session
    }
  },
  pages: {
    signIn: "/LoginPage",
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
