import * as React from "react";
import Link from "next/link";
import { AppWindow, Contact, LogIn, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Logo from "./logo";
import ModeToggle from "./theme-toggle";
import ListItem from "./ui/list-item";

const items = [
  {
    title: "Halaman",
    submenu: [
      {
        icon: Menu,
        title: "Beranda",
        href: "/",
        description: "Beranda MBI Amanatul Ummah",
      },
      {
        icon: Menu,
        title: "Admisi",
        href: "/admission",
        description: "Informasi Penerimaan Peserta Didik Baru",
      },
    ],
  },
  {
    title: "Tantang Kami",
    submenu: [
      {
        icon: Menu,
        title: "Tentang",
        href: "/about",
        description: "Tentang MBI Amanatul Ummah",
      },
      {
        icon: Contact,
        title: "Kontak",
        href: "/contact",
        description: "Informasi kontak dan hubungi kami",
      },
    ],
  },
  {
    title: "Aplikasi",
    submenu: [
      {
        icon: AppWindow,
        title: "SIMS",
        href: "https://sims.mbi-au.sch.id/login.php",
        description: "Sistem Informasi Manajemen Sekolah",
      },
      {
        icon: LogIn,
        title: "Formulir Pendaftaran",
        href: "https://sims.mbi-au.sch.id/psb/psb.php",
        description: "Aplikasi untuk mendaftar sebagai siswa baru",
      },
    ],
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
                {items.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {item.submenu.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            icon={subItem.icon}
                            title={subItem.title}
                            href={subItem.href}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
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
      {items.map((item) => (
        <div key={item.title}>
          <h3 className="font-medium mb-2">{item.title}</h3>
          {item.submenu.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.href}
              className="block text-sm text-muted-foreground py-2 transition-colors hover:text-primary"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      ))}

      <div className="pt-4 flex items-center justify-between">
        <a href="https://sims.mbi-au.sch.id/psb/psb.php">
          <Button>Daftar</Button>
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
}
