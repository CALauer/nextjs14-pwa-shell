import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PWAPrompt } from "./_components/PWAPrompt";
import "./_styles/global.scss";
import ServiceWorkerCheck from "./_components/ServiceWorkerCheck";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next14 PWA",
  description: "A progressive web app template, created with Next.js 14",
  manifest: "/manifest.json",
};
export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ServiceWorkerCheck />
        <main>{children}</main>
      </body>
    </html>
  );
}
