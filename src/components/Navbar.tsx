import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/locations";

interface NavbarProps {
  items: { label: string; href: string }[];
  cta?: { text: string; href: string };
  businessName: string;
}

const LOGO_SRC = "/Artistic_Decorative_Concrete_logo-removebg-preview.png";

export function Navbar({ items, cta, businessName }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const locationSlugs = new Set(LOCATIONS.map((l) => `/${l.slug}`));
  const mainNavItems = items.filter((item) => !locationSlugs.has(item.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1A1A1D]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1A1A1D]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img
            src={LOGO_SRC}
            alt="Artistic Decorative Concrete logo"
            className="h-10 w-auto md:h-12"
          />
          <span className="sr-only">{businessName}</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-1">
            {mainNavItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link
                  to={item.href}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-ring outline-none"
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-ring outline-none bg-transparent data-popup-open:bg-white/10 data-open:bg-white/10">
                Service Areas
              </NavigationMenuTrigger>
              <NavigationMenuContent className="grid w-[600px] grid-cols-2 gap-1 p-2">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/${loc.slug}`}
                    className="flex items-center gap-3 rounded-md p-3 text-sm text-foreground transition-colors hover:bg-accent"
                  >
                    <MapPin className="size-4 text-primary shrink-0" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span className="font-medium">{loc.name}, MT</span>
                      <span className="text-xs text-muted-foreground">
                        Decorative concrete services
                      </span>
                    </div>
                  </Link>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {cta && (
            <Link to={cta.href} className="hidden lg:inline-flex">
              <Button>{cta.text}</Button>
            </Link>
          )}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10">
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Service Areas
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/${loc.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none"
                    >
                      <MapPin className="size-4 text-primary shrink-0" aria-hidden="true" />
                      {loc.name}
                    </Link>
                  ))}
                </div>
                {cta && (
                  <Link to={cta.href} onClick={() => setMobileOpen(false)} className="mt-2">
                    <Button className="w-full">{cta.text}</Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
