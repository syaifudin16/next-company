import Image from "next/image";
import LogoImage from "@/images/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={`flex-none`}>
      <div className="flex items-center gap-3">
        <Image
          className="h-auto w-auto sm:h-12 rounded-xl"
          src={LogoImage}
          width={48}
          height={48}
          alt="MBI"
        />
        <div className="flex flex-col">
          <span className="text-sm">MA Unggulan Amanatul Ummah</span>
          <span className="text-base font-bold">
            Madrasah Bertaraf Internasional
          </span>
        </div>
      </div>
    </Link>
  );
}
