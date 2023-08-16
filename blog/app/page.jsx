import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LandingPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }
  const { data } = await supabase.from("posts").select();
  return (
    <pre>
      <h1>Landing Page!</h1>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
