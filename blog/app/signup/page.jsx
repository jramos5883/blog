"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (passwordsMatch) {
      await supabase.auth.signUp({
        email: email,
        password: password,
      });
      router.push("/signin");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="bg-fuchsia-300 h-screen flex items-center justify-center">
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
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
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
