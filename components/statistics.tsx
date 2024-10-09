"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Trophy, Book, School, Star } from "lucide-react";

export default function SchoolStatistics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: School, label: "Tahun Berdiri", value: "2006", prefix: "Sejak" },
    { icon: Users, label: "Siswa Aktif", value: 1200, suffix: "Siswa" },
    { icon: GraduationCap, label: "Alumni", value: 5000, suffix: "Lulusan" },
    {
      icon: Trophy,
      label: "Prestasi Nasional",
      value: 50,
      suffix: "Penghargaan",
    },
    { icon: Star, label: "Akreditasi", value: "A", prefix: "Peringkat" },
    {
      icon: Book,
      label: "Kurikulum Merdeka, Muadalah, dan Internasional",
      value: 3,
      suffix: "Kurikulum",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 bg-emerald-600 dark:bg-emerald-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sekolah Kami dalam Angka
        </motion.h2>
        <motion.p
          className="text-center text-white mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sejak berdiri, sekolah kami telah mencapai berbagai pencapaian yang
          membanggakan. Berikut adalah gambaran sekolah kami dalam angka-angka
          penting.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="bg-primary/10 rounded-full p-3 mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {stat.prefix && (
                      <span className="text-lg mr-2">{stat.prefix}</span>
                    )}
                    {typeof stat.value === "number" ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        {stat.value.toLocaleString()}
                      </motion.span>
                    ) : (
                      stat.value
                    )}
                    {stat.suffix && (
                      <span className="text-lg ml-2">{stat.suffix}</span>
                    )}
                  </motion.h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
