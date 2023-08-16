"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function SignOut() {
  const supabase = createClientComponentClient();
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { data: session } = supabase.auth.getSession();
    setSession(session);
  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    await supabase.auth.signOut();
    setSession(null);
    router.refresh();
  };

  useEffect(() => {
    const { data: session } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );
    setSession(session);
    return () => {
      session.unsubscribe();
    };
  }, []);

  return (
    <div>
      {session ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <Link href="/signin">
          <button>Sign In</button>
        </Link>
      )}
    </div>
  );
}
