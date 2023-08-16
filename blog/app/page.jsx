import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("posts").select();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
