'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';
import bcrypt from "bcrypt";
import { z } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const SignUpSchema = z
  .object({
    email: z.string({ required_error: '이메일을 입력해주세요.' }),
    password: z.string().min(4, '비밀번호는 4자리 이상입니다.'),
    repeatPassword: z.string()
  })
  .superRefine(({ password, repeatPassword }, ctx) => {
    if (password !== repeatPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'password not matched.',
        path: ['password'],
      });
    }
  });

export async function signUp(
  prevState: string | undefined,
  formData: FormData
) {
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    repeatPassword: formData.get('repeatPassword'),
  });

  if (!validatedFields.success) {
    return validatedFields.error.issues[0].message;
  }

  const { email, password } = validatedFields.data;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await sql`
      INSERT INTO users (id, email, password)
      VALUES (uuid_generate_v4(), ${email}, ${hashedPassword})
    `;
  } catch (error) {
    return 'Database Error: Failed to SignUp.';
  }
  revalidatePath('/sign-up');
  redirect('/login');
}
