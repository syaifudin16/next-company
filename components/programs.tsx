"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Globe2, LanguagesIcon, Trophy } from "lucide-react";

const programs = [
  {
    name: "Kelas Reguler",
    description:
      "Mengadopsi Kurikulum Merdeka dengan metode pembelajaran yang interaktif, kreatif, dan kolaboratif, memastikan siswa tumbuh dengan pemahaman mendalam dan keterampilan abad 21.",
    icon: BookOpen,
  },
  {
    name: "Kelas Olimpiade",
    description:
      "Persiapan komprehensif dan intensif untuk menghadapi kompetisi akademik bergengsi, baik di tingkat nasional maupun internasional, dengan pendampingan langsung dari para ahli.",
    icon: Trophy,
  },
  {
    name: "Kelas Luar Negeri",
    description:
      "Program unggulan yang mempersiapkan siswa untuk melanjutkan pendidikan ke universitas terkemuka di luar negeri, dengan kurikulum khusus dan pendampingan akademik yang tepat sasaran.",
    icon: LanguagesIcon,
  },
  {
    name: "Kelas Khoss",
    description:
      "Program intensif yang difokuskan untuk mempersiapkan siswa melanjutkan pendidikan ke Timur Tengah, dengan pembekalan bahasa Arab dan ilmu agama yang komprehensif.",
    icon: Globe2,
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 }, // Fade and slight rotate effect
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const hoverEffect = {
    whileHover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } }, // Zoom and tilt on hover
    whileTap: { scale: 0.95, rotate: 0, transition: { duration: 0.2 } },
  };

  return (
    <section className="py-16 bg-emerald-600 dark:bg-emerald-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-neutral-100">
            Program Kami
          </h2>
          <p className="text-center text-neutral-100 mb-12 max-w-2xl mx-auto">
            Kami menawarkan beragam program pendidikan yang dirancang untuk
            mengembangkan potensi setiap siswa. Setiap program kami fokus pada
            keunggulan akademik, pengembangan karakter, dan persiapan masa
            depan.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              ref={ref}
              variants={cardVariants} // Apply fade-in effect
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <div className="flex items-center">
                      <program.icon className="w-8 h-8 text-primary mr-4" />
                      <CardTitle className="text-xl font-semibold  dark:text-neutral-100">
                        {program.name}
                      </CardTitle>
                    </div>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neutral-600 dark:text-neutral-300 text-justify">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
