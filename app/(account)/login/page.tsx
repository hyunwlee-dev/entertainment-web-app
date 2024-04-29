import { authenticate } from "@/app/lib/actions";
import Button from "@/app/ui/common/button";

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
      <Button type='submit'>Login to your account</Button>
    </form>
  );
}
