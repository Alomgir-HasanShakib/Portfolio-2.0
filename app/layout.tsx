import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Alomgir Hasan Shakib Portfolio",
  description: "Modern & minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
