import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { useI18n } from "@/lib/i18n";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { direction } = useI18n();

  return (
    <div
      className={`min-h-screen bg-background ${direction === "rtl" ? "rtl" : "ltr"}`}
    >
      <Navigation />
      <main className="flex-1">{children}</main>
    </div>
  );
}
