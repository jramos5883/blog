"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfImage({ session }) {
  const supabase = createClientComponentClient();
  const [prof_image, setProf_image] = useState("");
  const router = useRouter();
}
