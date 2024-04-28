import { authenticate } from "@/app/lib/actions";

export default function LoginPage() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await authenticate("credentials", formData);
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <br />
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <br />
      <button>Sign In</button>
    </form>
  );
}
