import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Board",
  description: "A simple board for planning your tasks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="site-header">
          <Link className="brand" href="/">Task Board<span>Make room for what matters.</span></Link>
          <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/tasks">All tasks</Link></nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>Keep your next step simple.</span>
          <div><a href="https://example.com/sponsor" rel="sponsored">Our sponsor</a><span aria-hidden="true"> | </span><a href="https://example.org/planning-tips" rel="ugc">Tip from a user</a></div>
        </footer>
      </body>
    </html>
  );
}
