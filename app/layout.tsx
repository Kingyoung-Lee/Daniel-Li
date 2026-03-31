import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "李金岩 — 数据分析师 & 策略运营",
  description:
    "李金岩的个人主页，数据分析师与策略运营。" +
    "在字节跳动、小红书等头部互联网公司积累了丰富的电商策略运营与数据分析经验。",
  openGraph: {
    title: "李金岩 — 数据分析师 & 策略运营",
    description:
      "热衷于用数据驱动业务决策，专注电商策略运营与商业智能。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
