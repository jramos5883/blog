"use client";

import Login from "./login";

import "./globals.css";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Login />
        {children}
      </body>
    </html>
  );
}
