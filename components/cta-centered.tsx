import { Button } from "@/components/ui/button";

export default function CTACentered() {
  return (
    <section className="py-20 bg-slate-600 dark:bg-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Siap jadi pemimpin masa depan?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Dapatkan pendidikan berkualitas, kembangkan potensi diri, dan jadilah
          pribadi yang unggul.
        </p>
        <Button size="lg" variant="default">
          Daftar Sekarang
        </Button>
      </div>
    </section>
  );
}
