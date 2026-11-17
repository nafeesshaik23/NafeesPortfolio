import type { Metadata } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.positioning}`,
  description:
    "Data Analytics & Automation Professional working across Python, SQL, ETL, SAP automation, Power BI, and supply-chain analytics.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: `${profile.name} — ${profile.positioning}`,
    description: profile.statement,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.positioning}`,
    description: profile.statement,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
