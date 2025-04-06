
import NextAuth, { type NextAuthConfig, type Session, type User } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const config: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {
    strategy: "database", // ✅ Now correctly typed
  },

  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },

  pages: {
    signIn: "/LoginPage",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);

