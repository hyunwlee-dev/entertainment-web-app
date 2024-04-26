import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { sql } from '@vercel/postgres';
import { User } from "./app/lib/definitions";
import bcrypt from 'bcrypt';
import { authConfig } from "./auth.config";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      authorize: async ({ email, password }) => {
        const user = await getUser(email as string);
        if (!user)
          return null;
        const passwordsMatch = await bcrypt.compare(password as string, user.password);
        if (passwordsMatch)
          return user;
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
})
