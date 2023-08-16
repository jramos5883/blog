"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await supabase.auth.signInWithPassword({ email, password });
      router.push("/dashboard"); // Redirect to dashboard after signing in
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-fuchsia-300 flex justify-center mx-auto">
      <div className="flex flex-col">
        <h1>Sign In Page!</h1>
        <form className="flex flex-col">
          <label>Email:</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="bg-fuchsia-500" onClick={handleSignIn}>
            Sign In
          </button>
          <p>Don&apos;t have an account? Sign up here!</p>
          <button className="bg-fuchsia-500">
            <Link href="/signup">Sign Up</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
