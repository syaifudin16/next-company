import * as React from "react";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import { ModeToggle } from "./theme-toggle";

const menuItems = [
  { title: "Beranda", href: "/" },
  { title: "PPDB", href: "/ppdb" },
  { title: "Kontak", href: "/contact" },
];

const applicationItems = [
  {
    title: "SIMS",
    href: "https://sims.mbi-au.sch.id/login.php",
    description: "Sistem Informasi Manajemen Sekolah",
  },
  {
    title: "Pendaftaran",
    href: "https://sims.mbi-au.sch.id/psb/psb.php",
    description: "Aplikasi untuk mendaftar sebagai siswa baru",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Aplikasi</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {applicationItems.map((items) => (
                        <ListItem
                          key={items.title}
                          title={items.title}
                          href={items.href}
                        >
                          {items.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button className="hidden md:inline-flex">
              <a href="https://sims.mbi-au.sch.id/psb/psb.php">Daftar</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="flex flex-col space-y-4 mt-8">
      {menuItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
      <div className="pt-4">
        <h3 className="font-medium mb-2">Aplikasi</h3>
        {applicationItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="block text-sm text-muted-foreground py-2 transition-colors hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="pt-4 flex items-center justify-between">
        <ModeToggle />
        <Button>
          <a href="https://sims.mbi-au.sch.id/psb/psb.php">Daftar</a>
        </Button>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
