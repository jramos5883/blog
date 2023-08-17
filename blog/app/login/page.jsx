import SignUpPage from "../auth/sign-up/page";

export default function Login() {
  return (
    <div className="flex flex-col px-8 justify-center gap-2 bg-fuchsia-300 h-screen justify-content items-center">
      <h1>Sign In!</h1>
      <form
        className="flex flex-col justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Sign In
        </button>
      </form>
      <SignUpPage />
    </div>
  );
}
