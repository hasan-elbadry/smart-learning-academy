import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, GraduationCap } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, direction } = useI18n();

  const navigationItems = [
    { href: "/", label: t("nav.home") },
    { href: "/courses", label: t("nav.courses") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigationItems.map((item, index) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "nav-item relative transition-all duration-300 hover:text-primary transform hover:scale-105",
            isActive(item.href)
              ? "text-primary font-semibold active"
              : "text-muted-foreground hover:text-foreground",
            mobile && "block px-4 py-3 text-lg rounded-lg hover:bg-accent/50",
            !mobile && "px-3 py-2 rounded-md hover:bg-accent/20",
          )}
          onClick={() => mobile && setIsOpen(false)}
          style={{ animationDelay: mobile ? `${index * 100}ms` : "0ms" }}
        >
          <span className="relative z-10">{item.label}</span>
          {!mobile && (
            <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            to="/"
            className="mr-6 flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:text-primary/80" />
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 -z-10" />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {t("home.hero.title")}
            </span>
          </Link>
          <nav
            className={cn(
              "flex items-center gap-6 text-sm",
              direction === "rtl" && "mr-6",
            )}
          >
            <NavItems />
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-accent/50 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden transition-all duration-300 hover:scale-110 rounded-lg"
            >
              <Menu
                className={cn(
                  "h-6 w-6 transition-transform duration-300",
                  isOpen && "rotate-90",
                )}
              />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side={direction === "rtl" ? "right" : "left"}
            className="pr-0"
          >
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              <span className="font-bold">{t("home.hero.title")}</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <NavItems mobile />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link
              to="/"
              className="flex items-center space-x-2 md:hidden group transition-all duration-300"
            >
              <GraduationCap className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                SLA
              </span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <LanguageToggle />
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
