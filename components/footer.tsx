import Link from "next/link";
import Logo from "./logo";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

const socialLink = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mbiamanatulummah/",
    icon: <IconBrandFacebook />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/mbiofficialau/",
    icon: <IconBrandYoutube />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mbi.amanatulummah.pacet/",
    icon: <IconBrandInstagram />,
  },
];

const footerLinks = [
  {
    title: "Akses Cepat",
    sublinks: [
      {
        title: "Beranda",
        href: "/",
      },
      {
        title: "Admisi",
        href: "/admission",
      },
      {
        title: "Tentang",
        href: "/about",
      },
      {
        title: "Kontak",
        href: "/contact",
      },
    ],
  },
  {
    title: "Aplikasi",
    sublinks: [
      {
        title: "SIMS",
        href: "https://sims.mbi-au.sch.id",
      },
      {
        title: "Brosur",
        href: "https://drive.google.com/file/d/1r-gzXZKXqDevGlRqegyKDZuHAH3AxQ4p/view",
      },
      {
        title: "Form Pendaftaran",
        href: "https://spp.mbi-au.sch.id/psb/psb.php",
      },
      {
        title: "Form Pendaftaran",
        href: "https://spp.mbi-au.sch.id/psb/psb.php",
      },
    ],
  },
  {
    title: "Legal",
    sublinks: [
      {
        title: "Kebijakan Privasi",
        href: "/privacy",
      },
      {
        title: "Syarat & Ketentuan",
        href: "/terms",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Kami adalah madrasah bertaraf internasional yang berdedikasi untuk
              menyediakan pendidikan berkualitas tinggi dan pelayanan terbaik
              bagi para santri.
            </p>
            <div className="flex space-x-4">
              {socialLink.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h2 className="text-primary text-lg font-semibold mb-4">
                {link.title}
              </h2>
              <ul className="space-y-2">
                {link.sublinks.map((sublink) => (
                  <li key={sublink.title}>
                    <Link
                      href={sublink.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {sublink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-border text-sm text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MBI Amanatul Ummah.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
