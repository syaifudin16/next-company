import * as React from "react";
import Link from "next/link";
import { AppWindow, LogIn, Menu } from "lucide-react";

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
  { title: "Tentang", href: "/about" },
  { title: "Pendaftaran", href: "/admission" },
  { title: "Kontak", href: "/contact" },
];

const applicationItems = [
  {
    icon: AppWindow,
    title: "SIMS",
    href: "https://sims.mbi-au.sch.id/login.php",
    description: "Sistem Informasi Manajemen Sekolah",
  },
  {
    icon: LogIn,
    title: "Pendaftaran",
    href: "https://sims.mbi-au.sch.id/psb/psb.php",
    description: "Aplikasi untuk mendaftar sebagai siswa baru",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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
                          icon={items.icon}
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
            <ModeToggle className="hidden md:inline-flex" />
            <a href="https://sims.mbi-au.sch.id/psb/psb.php">
              <Button className="hidden md:inline-flex">Daftar</Button>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu />
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
        <a href="https://sims.mbi-au.sch.id/psb/psb.php">
          <Button>Daftar</Button>
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
}

interface ListItemProps
  extends Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "ref"
  > {
  icon: React.ElementType;
  title: string;
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li className="flex">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex space-x-4">
              {React.createElement(icon, { className: "h-6 w-6" })}
              <div className="space-y-2">
                <div className="text-sm font-semibold leading-none">
                  {title}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
