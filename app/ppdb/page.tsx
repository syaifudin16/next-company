import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  BookOpenIcon,
  TrophyIcon,
  CalendarIcon,
  CreditCardIcon,
  ClipboardListIcon,
  UserCheckIcon,
  InfoIcon,
  ArrowRightIcon,
} from "lucide-react";

export default function Admition() {
  return (
    <div className="text-neutral-100 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900">
      <header className="text-center bg-gradient-to-bl from-green-500 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">
            Penerimaan Peserta Didik Baru
          </h1>
          <p className="text-lg text-neutral-100">
            Selamat datang di halaman informasi PPDB tahun ajaran 2025/2026
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <InfoIcon className="h-6 w-6 text-primary" />
              <span>Informasi Umum PPDB</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Selamat datang calon peserta didik! Berikut adalah informasi
              penting mengenai Penerimaan Peserta Didik Baru (PPDB) di MBI
              Amanatul Ummah.:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-7">
              <li>Pendaftaran dibuka untuk siswa kelas 9 SMP/MTs</li>
              <li>Proses seleksi meliputi tes tulis dan penilaian prestasi</li>
              <li>Tersedia tiga gelombang pendaftaran dengan kuota terbatas</li>
              <li>
                Hasil seleksi akan diumumkan melalui website dan kontak
                terdaftar.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarIcon className="h-6 w-6 text-primary" />
              <span>Jadwal Pendaftaran</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Gelombang</TableHead>
                  <TableHead>Pendaftaran</TableHead>
                  <TableHead>Tanggal Ujian</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Gelombang I</TableCell>
                  <TableCell>Juli - September 2024</TableCell>
                  <TableCell>Oktober 2024</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gelombang II</TableCell>
                  <TableCell>Oktober - Februari 2025</TableCell>
                  <TableCell>Februari 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gelombang III</TableCell>
                  <TableCell>Februari - Juni 2025</TableCell>
                  <TableCell>Juni 2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ClipboardListIcon className="h-6 w-6 text-primary" />
              <span>Persyaratan Pendaftaran</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 pl-7">
              <li>Fotokopi akte kelahiran</li>
              <li>Fotokopi kartu keluarga</li>
              <li>Pas foto 3x4 (4 lembar)</li>
              <li>Fotokopi rapor kelas 6 semester 1</li>
              <li>Surat keterangan lulus (jika sudah ada)</li>
              <li>Bukti prestasi (jika ada)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheckIcon className="h-6 w-6 text-primary" />
              <span>Proses Seleksi</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4 pl-7">
              <li>
                <span className="font-semibold">Pendaftaran Online:</span>
                <p className="ml-6">
                  Calon siswa melakukan pendaftaran melalui website resmi
                  sekolah.
                </p>
              </li>
              <li>
                <span className="font-semibold">Verifikasi Berkas:</span>
                <p className="ml-6">
                  Panitia PPDB akan memverifikasi kelengkapan dan keabsahan
                  berkas pendaftaran.
                </p>
              </li>
              <li>
                <span className="font-semibold">Tes Tulis:</span>
                <p className="ml-6">
                  Calon siswa mengikuti tes tulis sesuai jadwal yang ditentukan.
                </p>
              </li>
              <li>
                <span className="font-semibold">Penilaian Prestasi:</span>
                <p className="ml-6">
                  Tim penilai akan mengevaluasi prestasi akademik dan
                  non-akademik calon siswa.
                </p>
              </li>
              <li>
                <span className="font-semibold">Wawancara:</span>
                <p className="ml-6">
                  Calon siswa dan orang tua akan mengikuti sesi wawancara dengan
                  pihak sekolah.
                </p>
              </li>
              <li>
                <span className="font-semibold">Pengumuman Hasil:</span>
                <p className="ml-6">
                  Hasil seleksi akan diumumkan melalui website dan kontak
                  terdaftar.
                </p>
              </li>
              <li>
                <span className="font-semibold">Daftar Ulang:</span>
                <p className="ml-6">
                  Calon siswa yang diterima melakukan daftar ulang sesuai jadwal
                  yang ditentukan.
                </p>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpenIcon className="h-6 w-6 text-primary" />
              <span>Ujian Masuk MBI Amanatul Ummah</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
              <ClipboardListIcon className="h-5 w-5 text-primary" />
              <span>1. Jalur Tes Tulis</span>
            </h3>
            <p className="pl-7">
              Seleksi dilakukan secara offline dan terpusat di MBI Amanatul
              Ummah Pacet. Hasil tes tulis menjadi faktor utama dalam
              penerimaan. Materi tes meliputi:
            </p>
            <ul className="list-disc list-inside mb-4 pl-7">
              <li>Matematika</li>
              <li>Biologi</li>
              <li>Fisika</li>
              <li>Bahasa Inggris</li>
              <li>Psikotes</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
              <TrophyIcon className="h-5 w-5 text-primary" />
              <span>2. Jalur Prestasi</span>
            </h3>
            <p className="pl-7">
              Berdasarkan prestasi akademik dan non-akademik, seperti menjuarai
              lomba/olimpiade di tingkat SMP/MTs. Peserta yang memenuhi
              persyaratan dapat diterima tanpa tes tulis.
            </p>
            <ul className="list-disc list-inside mb-4 pl-7">
              <li>Upload foto diri dan piagam prestasi (1-3 piagam)</li>
              <li>Foto atau scan raport semester 1-5</li>
              <li>
                Pernah meraih juara 1, 2, atau 3 di tingkat Kota/Kabupaten
              </li>
              <li>
                Rata-rata nilai raport minimal 7,5 (skala 10) atau 3,00 (skala
                4,00)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCardIcon className="h-6 w-6 text-primary" />
              <span>Biaya Sekolah</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Biaya Daftar Ulang</h3>
            <Table className="mb-6">
              <TableHeader>
                <TableRow>
                  <TableHead>Gelombang</TableHead>
                  <TableHead>Jumlah</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Gelombang I</TableCell>
                  <TableCell>Rp 10.700.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gelombang II</TableCell>
                  <TableCell>Rp 11.200.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gelombang III</TableCell>
                  <TableCell>Rp 11.200.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <h3 className="text-lg font-semibold mb-2">Biaya Awal Masuk</h3>
            <Table className="mb-6">
              <TableHeader>
                <TableRow>
                  <TableHead>Jenis Biaya</TableHead>
                  <TableHead>Jumlah</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Pendaftaran Ujian Masuk</TableCell>
                  <TableCell>Rp 400.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Biaya Matrikulasi & MPLM</TableCell>
                  <TableCell>Rp 400.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mb-4 text-sm text-muted-foreground">
              * Biaya tersebut dibayarkan setelah peserta didik dinyatakan LULUS
              pada Ujian Masuk MBI (UM-MBI). Biaya ini sudah mencakup infaq
              gedung, fasilitas pembelajaran, seragam beserta atribut sekolah,
              serta fasilitas asrama seperti kasur dan lemari.
            </p>

            <h3 className="text-lg font-semibold mb-2">Syariah Bulanan</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jenis Biaya</TableHead>
                  <TableHead>Jumlah</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>SPP Sekolah dan Pesantren</TableCell>
                  <TableCell>Rp 2.050.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-muted-foreground">
              * Syariah/SPP mencakup biaya untuk sarana dan prasarana santri,
              termasuk makan 3 kali sehari, SPP sekolah formal, SPP Diniyah
              Azhariyah, layanan kesehatan Poskestren, serta laundry (seragam
              dan pakaian sehari-hari). Biaya ini dibayarkan setiap bulan selama
              santri berada di pesantren.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <span>Kontak Informasi</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pl-7">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>Live Agent I: Ustadz Daud (+62 812-5212-8831)</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>Live Agent II: Ustadzah Titik (+62 856-0482-3015)</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span>Live Agent III: Ustadzah Indah (+62 858-9512-7539)</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5 text-primary" />
                <span>Email: kontak@mbi-amanatulummah.sch.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <span>
                  Alamat: Jl. Tirtowening No. 2 Kembang, Belor, Kembangbelor,
                  Kec. Pacet, Kabupaten Mojokerto, Jawa Timur 61374
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">Siap untuk Bergabung?</h2>
            <p className="text-xl mb-6">
              Jangan lewatkan kesempatan untuk menjadi bagian dari MBI.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-primary font-bold"
            >
              <a href="https://sims.mbi-au.sch.id/psb/psb.php">
                Daftar Sekarang
              </a>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
