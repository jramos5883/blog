import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-20 bg-fuchsia-700">
      <div className="flex items-center gap-4">
        <LogoutButton />
      </div>
      <Link
        href="/login"
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Login
      </Link>
      <Link href="/">Landing Page</Link>
    </div>
  );
}
