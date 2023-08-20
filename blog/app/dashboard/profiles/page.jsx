import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ProfForm from "./profForm/profForm.comp";

export const dynamic = "force-dynamic";

export default async function Profiles() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("prof_id", session?.user?.id);

  const user = profiles[0];

  return (
    <div className="bg-fuchsia-300 h-screen">
      Profile Info!
      <pre>{JSON.stringify(profiles, null, 2)}</pre>
      <p>{user?.user_name}</p>
      <p>{user?.first_name}</p>
      <p>{user?.last_name}</p>
      <p>{user?.avatar_url}</p>
      <ProfForm session={session} />
    </div>
  );
}
