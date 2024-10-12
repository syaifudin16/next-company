import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: "Facebook",
      icon: <Facebook />,
      href: "https://www.facebook.com/mbiamanatulummah/",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      href: "https://www.instagram.com/mbi.amanatulummah.pacet/",
    },
    {
      name: "Youtube",
      icon: <Youtube />,
      href: "https://www.youtube.com/channel/mbiofficialau/",
    },
  ];

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  const contactInfo = [
    "Ust. Daud: (+62 812-5212-8831)",
    "Ust. Titik: (+62 856-0482-3015)",
    "Ust. Indah: (+62 858-9512-7539)",
    "Jl. Tirtowening No. 2 Kembang, Belor, Kembangbelor, Kec. Pacet, Kabupaten Mojokerto, Jawa Timur 61374",
  ];
  return (
    <footer id="footer" className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-gray-400 pt-4">
              We are dedicated to providing quality education and fostering a
              love for learning in all our students.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            {contactInfo.map((info, index) => (
              <p key={index} className="text-gray-400">
                {info}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {year} MBI Amanatul Ummah. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
