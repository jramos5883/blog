import Navbar from "./navbar";
import Login from "./login";

import "./globals.css";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Login />
        {children}
      </body>
    </html>
  );
}
