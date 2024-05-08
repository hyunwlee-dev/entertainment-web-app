import NextAuth from "next-auth"
import { z } from "zod";
import Credentials from "next-auth/providers/credentials"
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { authConfig } from "./auth.config";
import { User } from "./app/lib/definitions";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch)
            return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
    /*
    Credentials({
      authorize: async ({ email, password }) => {
        const user = await getUser(email as string);
        if (!user)
          throw new Error("User not found.")
        const passwordsMatch = await bcrypt.compare(password as string, user.password);
        if (passwordsMatch)
          return user;
        console.log('Invalid credentials');
        return null;
      },
    }),
    */
  ],
})
