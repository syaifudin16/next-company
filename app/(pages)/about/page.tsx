import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Lightbulb, Target } from "lucide-react";

import Pengasuh from "@/images/leaders/1-pengasuh.png";
import Koordinator from "@/images/leaders/2-koordinator.png";
import Image from "next/image";

const activities = [
  {
    time: "03.00 – 05.00",
    name: "Sholat malam dan Sholat Subuh berjamaah",
  },
  {
    time: "05.00 – 06.00",
    name: "Mengaji kitab bersama Pak Kyai",
  },
  {
    time: "06.00 – 06.45",
    name: "Sarapan pagi dan persiapan untuk apel pagi",
  },
  {
    time: "06.45 – 07.30",
    name: "Apel pagi dan Sholat Dhuha",
  },
  {
    time: "07.30 – 13.30",
    name: "Pembelajaran kurikulum nasional dan internasional",
  },
  {
    time: "13.30 – 15.30",
    name: "Sholat Dzuhur berjamaah, makan siang, dan istirahat",
  },
  {
    time: "15.30 – 17.00",
    name: "Sholat Ashar berjamaah dan pelajaran diniyah",
  },
  {
    time: "17.00 – 18.30",
    name: "Persiapan serta Sholat Maghrib berjamaah",
  },
  {
    time: "18.30 – 19.30",
    name: "Dars 'aam bersama Kyai & Gus, diikuti dengan Sholat Isya'",
  },
  {
    time: "19.30 – 20.30",
    name: "Pembelajaran Al-Qur'an, tajwid, dan tahqiq",
  },
  {
    time: "20.30 – 22.00",
    name: "Makan malam, sholat tasbih, serta bimbingan belajar kelompok",
  },
  {
    time: "22.00 – 03.00",
    name: "Waktu istirahat",
  },
];

export default function AboutSchool() {
  return (
    <div className="text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900">
      <header className="relative aspect-video overflow-hidden w-full">
        <iframe
          src="https://www.youtube.com/embed/t-teMmd5Q0U"
          title="MBI Amanatul Ummah Pacet"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        <section>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            Ahlan Wa Sahlan!
          </h1>
          <Card className="px-4 py-2 mt-4">
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              Madrasah Bertaraf Internasional (MBI) Amanatul Ummah merupakan
              salah satu program unggulan dari MA Unggulan Amanatul Ummah.
              Berdiri sejak tahun 2006, MBI Amanatul Ummah Pacet berhasil
              mengantarkan sebagian besar santrinya untuk melanjutkan studi ke
              berbagai Perguruan Tinggi Negeri ternama di Indonesia (seperti
              ITB, UI, UGM, UNPAD, UNDIP, UNAIR, ITS, IPB, UB, dan lainnya),
              Pendidikan Kedinasan (STAN, STIS, AKPOL, AKMIL, dll), serta
              melanjutkan studi di luar negeri (antara lain Jerman, Singapura,
              Australia, Rusia, Mesir, Tunisia, Korea Selatan, Yaman, Maroko,
              Sudan, China, dan Malaysia). Banyak santri yang juga berhasil
              meraih beasiswa penuh, baik di dalam maupun luar negeri.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              Hingga saat ini, MBI terus menunjukkan pencapaian luar biasa dari
              para siswanya di tingkat lokal, regional, nasional, maupun
              internasional. Berbagai faktor inilah yang membuat MBI Amanatul
              Ummah Pacet menjadi lembaga Pendidikan Unggulan Amanatul Ummah
              yang paling diminati.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              Kurikulum di MBI Amanatul Ummah Pacet mencakup Kurikulum Nasional,
              Kurikulum Internasional, serta Kurikulum Al Azhar (Kairo-Mesir).
              MBI menawarkan dua jenis sekolah: sekolah formal (dengan kurikulum
              nasional) dan sekolah mu’adalah/diniyah (mengikuti kurikulum Al
              Azhar Kairo). Santri yang lulus dari MBI dapat memperoleh ijazah
              sebagai berikut: [1] Ijazah Nasional; [2] Ijazah Muadalah yang
              setara dengan Al Azhar (Kairo-Mesir); [3] MECA (TOEFL); dan [4]
              MADINA (TOAFL).
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              MBI hadir sebagai lembaga pendidikan yang lengkap, menggabungkan
              pembelajaran tradisional pesantren dengan pendidikan formal
              modern. Para santri nantinya tidak hanya siap menghadapi persoalan
              agama Islam, tetapi juga menguasai sains, teknologi, ilmu sosial,
              dan seni.
            </p>
          </Card>
        </section>

        <section className="relative bg-emerald-200 rounded-md py-12 px-6">
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-6">
              &quot;Kami berkomitmen menjadikan Pondok Pesantren Amanatul Ummah
              sebagai yang terbaik dalam membentuk generasi berdaya saing tinggi
              dan berakhlakul karimah. Pesantren ini terbuka untuk semua
              kalangan, guna mewujudkan kesejahteraan dan keadilan bagi seluruh
              masyarakat Indonesia.&quot;
            </h2>
            <Image
              src={Pengasuh}
              alt="Prof. Dr. KH. Asep Saifuddin Chalim, M.A"
              width={200}
              height={200}
              className="mx-auto rounded-full mb-4"
            />
            <CardTitle className="text-xl font-bold text-center text-gray-800">
              Prof. Dr. KH. Asep Saifuddin Chalim, M.A
            </CardTitle>
            <p className="text-sm text-gray-600 text-center">
              Pengasuh Pondok Pesantren Amanatul Ummah
            </p>
          </div>
        </section>

        <section className="relative bg-emerald-200 rounded-md py-12 px-6">
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
              &quot;Kami berkomitmen untuk membentuk generasi santri yang unggul
              di berbagai bidang. Dengan dedikasi tanpa henti, kami berupaya
              memaksimalkan potensi setiap siswa.&quot;
            </h2>
            <Image
              src={Koordinator}
              alt="Gus, H. Muhammad Ilyas, Lc. M.A"
              width={200}
              height={200}
              className="mx-auto rounded-full mb-4"
            />
            <CardTitle className="mt-2 text-xl font-bold text-center text-gray-800">
              Gus, H. Muhammad Ilyas, Lc. M.A
            </CardTitle>
            <p className="text-sm text-gray-600 text-center">
              Koordinator MBI Amanatul Ummah Pacet
            </p>
          </div>
        </section>

        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            Visi dan Misi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-center">
                  Visi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-center">
                  Terwujudnya manusia yangg unggul, utuh, dan berakhlakul
                  karimah untuk kemuliaan dan kejayaan islam dan kaum muslimin,
                  kemuliaan dan kejayaan bangsa seluruh Indonesia dan untuk
                  keberhasilan cita-cita kemerdekaan yaitu terwujudnya
                  kesejahteraan dan tegaknya keadilan bagi seluruh bangsa
                  Indonesia.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <Target className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle className="text-2xl font-bold text-center">
                  Misi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-center">
                  Melaksanakan sitem yang berlaku di Lembaga Pendidikan Unggulan
                  Amanatul Ummah secara ketat dalam pelaksanaan dan bertanggung
                  jawab dalam keberhasilan.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            Aktivitas Santri
          </h2>
          <Card className="px-4 py-2 mt-4">
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              Aktivitas santri di MBI Amanatul Ummah Pacet dimulai sejak pukul
              03.00 WIB dini hari hingga pukul 22.00 WIB malam. Seluruh
              rangkaian kegiatan ini telah konsisten dijalankan sejak awal
              berdirinya MBI.
            </p>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Waktu</TableHead>
                  <TableHead>Aktivitas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.name}>
                    <TableCell>{activity.time}</TableCell>
                    <TableCell>{activity.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>
      </main>
    </div>
  );
}
