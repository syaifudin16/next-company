import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function CTACentered() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap jadi pemimpin masa depan?
        </h2>
        <p className="text-xl mb-8">
          Dapatkan pendidikan berkualitas, kembangkan potensi diri, dan jadilah
          pribadi yang unggul.
        </p>
        <Link href="/admission">
          <Button
            size="lg"
            variant="secondary"
            className="text-primary font-bold"
          >
            Daftar Sekarang
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
