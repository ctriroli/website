import "./globals.css";
import cx from "classnames";
import { sora } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Eliot - We make enterprise AI actually happen",
  description:
    "We make enterprise AI actually happen.",
  metadataBase: new URL("https://eliot.ai"),
};

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = (
    <html lang="en">
      <body className={cx(sora.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Navbar />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );

  if (clerkPublishableKey && !clerkPublishableKey.includes("placeholder")) {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
