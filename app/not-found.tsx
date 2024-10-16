import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Origami } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <Origami size={48} absoluteStrokeWidth className="mb-8" />
      <h1 className="mb-2 text-6xl font-bold">404</h1>
      <p className="mb-4 text-2xl font-light">Page not found</p>
      <p className="mb-8 text-lg">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/" className="mb-4 inline-block text-sm" prefetch={false}>
        <Button variant="default">Go back home</Button>
      </Link>
    </div>
  );
}
