import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-20 bg-fuchsia-700">
      <Link href="/signin">
        <button>Sign In</button>
      </Link>
    </div>
  );
}
