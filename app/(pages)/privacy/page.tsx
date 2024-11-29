"use client";

import { MapPin, Mail, Clock, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactUs() {
  return (
    <div className="text-neutral-100 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900">
      <header className="text-center bg-gradient-to-bl from-green-500 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Hubungi Kami</h1>
          <p className="text-lg text-neutral-100">
            Kami siap memberikan bantuan dan informasi yang Anda butuhkan.
            Silakan hubungi kami melalui saluran yang tersedia, atau kunjungi
            kantor kami secara langsung untuk berdiskusi lebih lanjut dengan tim
            kami.
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>
                    Alamat: Jl. Tirtowening No. 2 Kembang, Belor, Kembangbelor,
                    Kec. Pacet, Kabupaten Mojokerto, Jawa Timur 61374
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <span>Live Agent I: Ustadz Daud (+62 812-5212-8831)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <span>Live Agent II: Ustadzah Titik (+62 856-0482-3015)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <span>
                    Live Agent III: Ustadzah Indah (+62 858-9512-7539)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email: kontak@mbi-amanatulummah.sch.id</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Jam Operasional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Senin - Minggu: 8:00 - 16:00</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Peta Lokasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15817.112213556406!2d112.5588682!3d-7.6532222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7877101328bf87%3A0x8b314fdc5bf8f7a8!2sMBI%20Amanatul%20Ummah!5e0!3m2!1sid!2sid!4v1728907392809!5m2!1sid!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
