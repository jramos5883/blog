import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LandingPage() {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (session) {
  //   redirect("/dashboard");
  // }

  return <div className="bg-fuchsia-300 h-screen">Landing Page!</div>;
}
