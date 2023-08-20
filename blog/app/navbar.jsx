import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { GiFlamingTrident } from "react-icons/gi";

export default async function Navbar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="h-20 bg-fuchsia-700 flex flex-row items-center place-content-between">
      <div className="px-2">
        <Link href="/">
          <span className="text-5xl">
            <GiFlamingTrident />
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center p-4">
          <Link href="/dashboard">Dashboard</Link>
        </div>

        <div className="flex items-center p-4">
          <Link href="/dashboard/profiles">Profile</Link>
        </div>

        {session ? (
          <div className="flex items-center p-4">
            <LogoutButton />
          </div>
        ) : (
          <div className="flex items-center p-4">
            <Link href="/login" className="flex items-center p-4">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
