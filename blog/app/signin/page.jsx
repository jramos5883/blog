"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await supabase.auth.signInWithPassword({ email, password });
      router.push("/dashboard"); // Redirect to dashboard after signing in
      router.refresh(); // Refresh the page to get the session
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      router.push("/dashboard"); // Redirect to dashboard after signing in
      router.refresh(); // Refresh the page to get the session
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-fuchsia-300 h-screen flex items-center justify-center">
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
          <div className="pt-4">
            <button
              className="bg-fuchsia-500 w-full"
              onClick={handleGoogleSignIn}
            >
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
