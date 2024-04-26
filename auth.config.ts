import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnTvSeries = nextUrl.pathname === '/tv-series';
      if (isOnTvSeries) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/tv-series', nextUrl.origin));
      }
      if (!isLoggedIn && isOnTvSeries)
        return Response.redirect(new URL('/login', nextUrl.origin));
      return true;
    },
  },
  providers: [],
};

