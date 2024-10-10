import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Kurikulum Internasional",
    description:
      "Pendidikan Pesantren dengan standar internasional yang menggabungkan kurikulum nasional dengan nilai-nilai keislaman.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pembiasaan Multibahasa",
    description:
      "Dalam keseharian, siswa diwajibkan berkomunikasi dalam bahasa Arab dan Inggris, sebagai bagian dari upaya pembiasaan berbahasa yang efektif.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Program Kelas Olimpiade",
    description:
      "Program intensif bagi siswa yang ingin mendalami bidang akademik seperti Matematika, Sains, dan Bahasa Inggris.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Program Kelas Fashlul Khoos",
    description:
      "Program unggulan yang menawarkan pendalaman ilmu agama secara mendalam, dengan pembelajaran langsung dari Syeikh Timur Tengah.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pembinaan 24 Jam",
    description:
      "Pengembangan karakter siswa dilakukan melalui kegiatan Pembinaan yang mencakup berbagai program pengembangan karakter secara intensif dan menyeluruh.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Persiapan Universitas",
    description:
      "Setiap siswa mendapatkan bimbingan khusus untuk masuk ke perguruan tinggi pilihan melalui program Try Out rutin.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Organiasi Santri",
    description:
      "Untuk mengembangkan keterampilan kepemimpinan dan berorganisasi, siswa difasilitasi dengan berbagai organisasi santri.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-white">
          Kenapa Memilih Kami
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
          Kami menawarkan pendidikan di lingkungan pesantren dan madrasah
          bertaraf internasional, menggabungkan ilmu pengetahuan modern dengan
          nilai-nilai Islami. Dengan pengajar berkualitas dan fasilitas lengkap,
          kami siap membentuk generasi berprestasi dan berakhlak.
        </p>
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
