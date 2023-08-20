"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfForm({ session }) {
  const supabase = createClientComponentClient();
  const [user_name, setUser_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const router = useRouter();

  const updateProfile = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("profiles")
      .update({
        user_name,
        first_name,
        last_name,
        avatar_url,
      })
      .eq("prof_id", session.user.id); // Add WHERE clause here
    if (data) {
      console.log(data);
      setUser_name("");
      setFirst_name("");
      setLast_name("");
      setAvatar_url("");
    }
    router.refresh();
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col px-8 justify-center gap-2 bg-fuchsia-300 justify-content items-center">
      Profile Form!
      <h1>Make/Update Profile</h1>
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        onSubmit={updateProfile}
      >
        <label className="text-md" htmlFor="user_name">
          User Name:
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="text"
          name="user_name"
          value={user_name}
          onChange={(event) => setUser_name(event.target.value)}
          placeholder="User Name"
          required
        />
        <label className="text-md" htmlFor="first_name">
          First Name:
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="text"
          name="first_name"
          value={first_name}
          onChange={(event) => setFirst_name(event.target.value)}
          placeholder="First Name"
          required
        />
        <label className="text-md" htmlFor="last_name">
          Last Name:
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="text"
          name="last_name"
          value={last_name}
          onChange={(event) => setLast_name(event.target.value)}
          placeholder="Last Name"
          required
        />
        <label className="text-md" htmlFor="avatar_url">
          Avatar Url:
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="text"
          name="avatar_url"
          value={avatar_url}
          onChange={(event) => setAvatar_url(event.target.value)}
          placeholder="Avatar Url"
          required
        />

        <button
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2 bg-fuchsia-600"
          type="submit"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
