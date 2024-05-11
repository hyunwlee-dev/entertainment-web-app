'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/app/ui/common/button';
import Link from 'next/link';
import { signUp } from '@/app/lib/actions';
import clsx from 'clsx';
import styles from './sign-up-form.css';

export default function SignUpForm() {
  const [errorMessage, dispatch] = useFormState(signUp, undefined);

  return (
    <form className={styles.form} action={dispatch}>
      <h2 className={styles.headingL}>Sign Up</h2>
      <label className={styles.srOnly} htmlFor='email'>Email</label>
      <input
        className={styles.input}
        id="email"
        name="email"
        type="email"
        placeholder="Email address"
        required
      />
      <label
        className={styles.srOnly}
        htmlFor="password"
      >
        Password
      </label>
      <input
        className={styles.input}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        minLength={4}
        required
      />
      <label
        className={styles.srOnly}
        htmlFor="repeatPassword"
      >
        Repeat Password
      </label>
      <input
        className={styles.input}
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        placeholder="Repeat Password"
        minLength={4}
        required
      />
      <div
        aria-live='polite'
        aria-atomic='true'
        className={styles.error}
      >
        {errorMessage && (
          <>{errorMessage}</>
        )}
      </div>
      <SignUpButton />
      <div className={styles.loginDescription}>
        {"Already have an account?"}
        <Link
          className={styles.loginLink}
          href={'/login'}
        >
          Login
        </Link>
      </div>
    </form>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className={clsx(styles.button, styles.disabled)}
      disabled
      aria-disabled={pending}>
      {pending ? 'Loading...' : 'Create an account'}
    </Button>
  );
}
