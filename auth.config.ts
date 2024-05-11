import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    redirect: async ({ url, baseUrl }) => {
      if (url.includes('/login')) {
        return baseUrl;
      }
      return url;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtected = !(nextUrl.pathname.startsWith('/login'));
      const isOnSignUp = nextUrl.pathname.startsWith('/sign-up');
      if (isOnSignUp) {
        if (isLoggedIn) return false;
        return true;
      }
      if (isOnProtected) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

