import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import testimony1 from "@/images/testimony/1.jpg";
import testimony2 from "@/images/testimony/2.jpg";
import testimony3 from "@/images/testimony/3.jpeg";
import testimony4 from "@/images/testimony/4.jpeg";
import testimony5 from "@/images/testimony/5.png";
import testimony6 from "@/images/testimony/6.png";

import Image from "next/image";

const testimonials = [
  {
    name: "Prof. Dr. H. M. Ali Ramdhani",
    role: "Direktur Jenderal Pendis Kemenag RI",
    content:
      "Madrasah berstandar dunia yang menghasilkan individu berkarakter mulia, berwawasan luas, dan terampil, dengan kompetensi utama yang mempersiapkan alumninya meraih kesuksesan di dunia dan kebahagiaan di akhirat.",
    avatar: testimony3,
  },
  {
    name: "Prof. Ojat Darojat, M.Bus., Ph.D.",
    role: "Rektor Universitas Terbuka",
    content:
      "MBI adalah lembaga pendidikan yang menggabungkan wawasan global dengan nilai-nilai luhur budaya lokal. MBI mendidik generasi bangsa yang berprestasi di bidang akademik dan berkarakter mulia, mencerminkan pendidikan yang tetap berjiwa ke-Indonesiaan.",
    avatar: testimony2,
  },
  {
    name: "Dr. Zastrow Al Ngatawi",
    role: "Dosen",
    content:
      "Kualitas MBI Amanatul Ummah (AU) Pacet setara dengan lembaga pendidikan favorit di Indonesia. Dengan sistem modern yang kreatif, santri MBI sering meraih juara di lomba nasional dan diterima di perguruan tinggi favorit, termasuk tanpa tes.",
    avatar: testimony1,
  },
  {
    name: "Fayyadh Faza Muhammad",
    role: "Alumni",
    content:
      "Mondok di MBI dengan sistem pembelajaran yang mendukung minat dan bakat santri sangat membantu saya meningkatkan kualitas diri di bidang akademik dan non-akademik, sambil tetap menjaga nilai dan budaya keagamaan yang khas ala pesantren.",
    avatar: testimony4,
  },
  {
    name: "Ahmad Rizqi Hidayat",
    role: "Alumni",
    content:
      "Di MBI, saya belajar banyak tentang keilmuan Islam, tradisi pesantren, dan cara menghormati guru ala santri. Karakter yang dibentuk di MBI sangat kuat, membuat kami menjadi individu yang bersemangat untuk terus bertumbuh dan berproses.",
    avatar: testimony5,
  },
  {
    name: "Muhammad Fazli Fahmi Ardiansyah",
    role: "Alumni",
    content:
      "Tanpa belajar di MBI, mungkin saya tidak akan mendapatkan kesempatan menjadi penerima Beasiswa Indonesia Maju (BIM). Terima kasih kepada Abah Yai Asep, pendiri dan pengasuh PP Amanatul Ummah, yang telah menyediakan sistem pembelajaran luar biasa bagi para santri.",
    avatar: testimony6,
  },
];

export default function Testimony() {
  return (
    <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-white">
          Apa Yang Mereka Katakan
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
          Testimoni dari santri, alumni, dan orang tua tentang pengalaman
          belajar di MBI Amanatul Ummah. Mereka merasakan pendidikan yang
          berkualitas dan pembentukan karakter yang kuat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <Image src={testimonial.avatar} alt={testimonial.name} />
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-justify">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
