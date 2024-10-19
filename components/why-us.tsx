import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Kurikulum Internasional",
      description:
        "Pendidikan Pesantren dengan standar internasional yang menggabungkan kurikulum nasional dengan nilai-nilai keislaman.",
      icon: <IconClipboardCopy className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Pembiasaan Multibahasa",
      description:
        "Dalam keseharian, siswa diwajibkan berkomunikasi dalam bahasa Arab dan Inggris, sebagai bagian dari upaya pembiasaan berbahasa yang efektif.",
      icon: <IconFileBroken className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Program Kelas Olimpiade",
      description:
        "Program intensif bagi siswa yang ingin mendalami bidang akademik seperti Matematika, Sains, dan Bahasa Inggris.",
      icon: <IconSignature className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Program Kelas Fashlul Khoos",
      description:
        "Program unggulan yang menawarkan pendalaman ilmu agama secara mendalam, dengan pembelajaran langsung dari Syeikh Timur Tengah.",
      icon: <IconTableColumn className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Pembinaan 24 Jam",
      description:
        "Pengembangan karakter siswa dilakukan melalui kegiatan Pembinaan yang mencakup berbagai program pengembangan karakter secara intensif dan menyeluruh.",
      icon: <IconArrowWaveRightUp className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Persiapan Universitas",
      description:
        "Setiap siswa mendapatkan bimbingan khusus untuk masuk ke perguruan tinggi pilihan melalui program Try Out rutin.",
      icon: <IconBoxAlignTopLeft className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Organiasi Santri",
      description:
        "Untuk mengembangkan keterampilan kepemimpinan dan berorganisasi, siswa difasilitasi dengan berbagai organisasi santri.",
      icon: <IconBoxAlignRightFilled className="h-8 w-8 text-pink-500" />,
    },
  ];

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-secondary dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Mengapa Memilih Kami
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
          Kami menawarkan pendidikan di lingkungan pesantren dan madrasah
          bertaraf internasional, menggabungkan ilmu pengetahuan modern dengan
          nilai-nilai Islami. Dengan pengajar berkualitas dan fasilitas lengkap,
          kami siap membentuk generasi berprestasi dan berakhlak.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
