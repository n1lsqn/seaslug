import type { Metadata } from "next";
import "./globals.css";
import { Zen_Maru_Gothic } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Zen_Maru_Gothic({
  weight: "400",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Sea Slug",
  description: "にるのプロフィールサイト的なやつ！！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
