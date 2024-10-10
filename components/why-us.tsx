import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  Headphones,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Kurikulum Internasional",
    description:
      "Pendidikan Pesantren dengan standar internasional yang menggabungkan kurikulum nasional dengan nilai-nilai keislaman.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Clock,
    title: "Pembiasaan Multibahasa",
    description:
      "Dalam keseharian, siswa diwajibkan berkomunikasi dalam bahasa Arab dan Inggris, sebagai bagian dari upaya pembiasaan berbahasa yang efektif.",
  },
  {
    icon: Users,
    title: "Program Kelas Olimpiade",
    description:
      "Program intensif bagi siswa yang ingin mendalami bidang akademik seperti Matematika, Sains, dan Bahasa Inggris.",
  },
  {
    icon: Zap,
    title: "Program Kelas Fashlul Khoos",
    description:
      "Program unggulan yang menawarkan pendalaman ilmu agama secara mendalam, dengan pembelajaran langsung dari Syeikh Timur Tengah.",
    className: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "Pembinaan 24 Jam",
    description:
      "Pengembangan karakter siswa dilakukan melalui kegiatan Pembinaan yang mencakup berbagai program pengembangan karakter secara intensif dan menyeluruh.",
  },
  {
    icon: Headphones,
    title: "Persiapan Universitas",
    description:
      "Setiap siswa mendapatkan bimbingan khusus untuk masuk ke perguruan tinggi pilihan melalui program Try Out rutin.",
  },
  {
    icon: ThumbsUp,
    title: "Organiasi Santri",
    description:
      "Untuk mengembangkan keterampilan kepemimpinan dan berorganisasi, siswa difasilitasi dengan berbagai organisasi santri.",
    className: "md:col-span-2",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Kenapa Memilih Kami
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Kami menawarkan pendidikan di lingkungan pesantren dan madrasah
          bertaraf internasional, menggabungkan ilmu pengetahuan modern dengan
          nilai-nilai Islami. Dengan pengajar berkualitas dan fasilitas lengkap,
          kami siap membentuk generasi berprestasi dan berakhlak.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={`${
                reason.className || ""
              } flex flex-col justify-between`}
            >
              <CardHeader>
                <reason.icon className="w-8 h-8 text-emerald-500 mb-2" />
                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
