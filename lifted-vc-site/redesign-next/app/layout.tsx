import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Fundraising Playbook | Lifted",
  description:
    "Chapter 2 — The Authentic FOMO Framework. A redesign of the Lifted fundraising playbook.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
