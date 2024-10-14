import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Trophy, Book, School, Star } from "lucide-react";

export default function SchoolStatistics() {
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

  return (
    <section className="py-16 bg-emerald-600 dark:bg-emerald-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Sekolah Kami dalam Angka
        </h2>
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
          Sejak berdiri, sekolah kami telah mencapai berbagai pencapaian yang
          membanggakan. Berikut adalah gambaran sekolah kami dalam angka-angka
          penting.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <Card className="overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="bg-primary/10 rounded-full p-3 mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    {stat.prefix && (
                      <span className="text-lg mr-2">{stat.prefix}</span>
                    )}
                    {typeof stat.value === "number"
                      ? stat.value.toLocaleString()
                      : stat.value}
                    {stat.suffix && (
                      <span className="text-lg ml-2">{stat.suffix}</span>
                    )}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
