import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/signin");
  }

  const { data } = await supabase.from("posts").select();

  return (
    <div>
      <div>Dashboard</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </div>
  );
}
