"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { authenticate } from "@/app/lib/actions";
import Button from "@/app/ui/common/button";
import { HTMLAttributes } from "react";
import styles from "./login-board.css";

interface LoginBoardProps extends HTMLAttributes<HTMLDivElement> { }

export default function LoginBoard({ ...props }: LoginBoardProps) {
  const { pending } = useFormStatus();
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <section className={styles.board} {...props}>
      <h2 className={styles.headingL}>Login</h2>
      <form
        className={styles.form}
        action={formAction}
      >
        <label
          className={styles.srOnly}
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
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
        />
        <Button
          className={styles.button}
          type='submit'
          disabled={pending}
        >
          {pending ? 'loading...' : 'Login to your account'}
        </Button>
      </form>
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
      <div className={styles.signupDescription}>
        {"Don't have an account?"}
        <Link
          className={styles.signupLink}
          href={'/signUp'}
        >
          Sign Up
        </Link>
      </div>
    </section >
  );
}
