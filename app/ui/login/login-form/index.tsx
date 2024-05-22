'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import Button from '@ui/common/button';
import { authenticate } from '@lib/actions';
import clsx from 'clsx';
import styles from './login-form.css';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className={styles.form} action={dispatch}>
      <h2 className={styles.headingL}>Login</h2>
      <label className={styles.srOnly} htmlFor='email'>Email</label>
      <input
        className={styles.input}
        id="email"
        name="email"
        type="email"
        placeholder="Email address"
        defaultValue={'test@test.com'}
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
        defaultValue={'1234'}
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
      <LoginButton />
      <div className={styles.signupDescription}>
        {"Don't have an account?"}
        <Link
          className={styles.signupLink}
          href={'/sign-up'}
        >
          Sign Up
        </Link>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className={clsx(styles.button, { [styles.disabled]: pending })}
      disabled={pending}
      aria-disabled={pending}>
      {pending ? 'Loading...' : 'Login to your account'}
    </Button>
  );
}
