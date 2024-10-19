import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-64px)] relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 mb-4">
          Selamat Datang di MBI
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-neutral-100">
          Empowering minds, shaping futures
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="default">
            <Link href="/admission">Admisi</Link>
          </Button>
          <Button size="lg" variant="outline">
            <a href="https://sims.mbi-au.sch.id/psb/psb.php">Daftar</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
