"use client";

import { ThemeProvider } from "next-themes";
import { LangProvider } from "./lang-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}
