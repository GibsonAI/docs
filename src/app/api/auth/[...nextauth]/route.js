import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import prisma, { PrismaAdapter } from 'utils/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.colorSchema = token.colorSchema;
        session.userId = token.uid;
        session.githubHandle = token.githubHandle;
      }
      return session;
    },
    async jwt({ user, account, token, profile, trigger, session }) {
      if (trigger === 'update' && session?.colorSchema) {
        token.colorSchema = session.colorSchema;
      }

      if (user) {
        token.uid = user.id;
        token.colorSchema = user.colorSchema;
      }

      if (account) {
        token.access_token = account.access_token;
      }
      if (profile) {
        token.githubHandle = profile.login;
      }

      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

// Disabled NextAuth for build
export const GET = () => new Response('NextAuth is disabled', { status: 200 });
export const POST = () => new Response('NextAuth is disabled', { status: 200 });
