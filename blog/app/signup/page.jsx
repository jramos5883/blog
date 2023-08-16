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

  const handleSignUp = async (event) => {
    event.preventDefault();
    await supabase.auth.signUp({
      email: email,
      password: password,
    });
    router.refresh();
  };

  return (
    <div className="bg-fuchsia-300 flex justify-center mx-auto">
      <div className="flex flex-col">
        <h1>Sign Up Page!</h1>
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
          <button className="bg-fuchsia-500" onClick={handleSignUp}>
            Sign Up
          </button>
          <p>Already have an account? Sign in here!</p>
          <button className="bg-fuchsia-500">
            <Link href="/signin">Sign In</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
