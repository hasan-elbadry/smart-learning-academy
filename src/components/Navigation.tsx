import { useState } from "react";
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
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "transition-colors hover:text-primary",
            isActive(item.href)
              ? "text-primary font-medium"
              : "text-muted-foreground",
            mobile && "block px-2 py-1 text-lg",
          )}
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
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
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
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
            <Link to="/" className="flex items-center space-x-2 md:hidden">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="font-bold text-sm">SLA</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-1">
            <LanguageToggle />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
