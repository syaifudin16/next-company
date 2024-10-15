import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mbi-amanatulummah.sch.id"),
  alternates: {
    canonical: "https://mbi-amanatulummah.sch.id/",
  },
  title: {
    default: "MBI Amanatul Ummah - Madrasah Bertaraf Internasional",
    template: "%s | MBI Amanatul Ummah",
  },
  description:
    "MBI Amanatul Ummah (AU) Pacet adalah Madrasah Bertaraf Internasional yang mengedepankan pendidikan berkualitas dan berstandar dunia, serta mencetak generasi unggul dengan nilai keislaman dan keilmuan yang tinggi.",
  keywords: [
    "MBI Amanatul Ummah",
    "Madrasah Internasional",
    "Pondok Pesantren Pacet",
    "Sekolah Islam Terbaik",
    "Pesantren Berstandar Dunia",
    "Pendidikan Islam",
    "Pesantren Amanatul Ummah",
    "Madrasah Terbaik Jawa Timur",
    "Pendidikan Berbasis Islam",
    "Sekolah Berasrama",
    "Madrasah Aliyah Internasional",
    "Pesantren di Pacet",
    "Program Unggulan Pesantren",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
