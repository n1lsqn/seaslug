import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Darumadrop_One, Hachi_Maru_Pop, Monomaniac_One, Slackside_One, Yomogi, Yusei_Magic, Zen_Maru_Gothic } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Zen_Maru_Gothic({
  weight: "400",
  subsets: ['latin']
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
