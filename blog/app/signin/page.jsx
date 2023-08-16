"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "poseidon22@yahoo.com",
      password: "Bioshock123!",
    });
    router.push("/dashboard"); // Redirect to dashboard after signing in
  };

  return (
    <div className="bg-fuchsia-300">
      <h1>Sign In Page!</h1>
      <button className="bg-fuchsia-500" onClick={handleSignIn}>
        Sign in
      </button>
    </div>
  );
}
