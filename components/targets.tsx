import Image from "next/image";

import Img1 from "@/images/targets/1.png";
import Img2 from "@/images/targets/2.png";
import Img3 from "@/images/targets/3.png";
import Img4 from "@/images/targets/4.png";
import Img5 from "@/images/targets/5.png";
import Img6 from "@/images/targets/6.png";
import Img7 from "@/images/targets/7.png";
import Img8 from "@/images/targets/8.png";
import Img9 from "@/images/targets/9.png";
import Img10 from "@/images/targets/10.png";
import Img11 from "@/images/targets/11.png";
import Img12 from "@/images/targets/12.png";

export default function Targets() {
  const targets = [
    { name: "Partner 1", logo: Img1 },
    { name: "Partner 2", logo: Img2 },
    { name: "Partner 3", logo: Img3 },
    { name: "Partner 4", logo: Img4 },
    { name: "Partner 5", logo: Img5 },
    { name: "Partner 6", logo: Img6 },
    { name: "Partner 7", logo: Img7 },
    { name: "Partner 8", logo: Img8 },
    { name: "Partner 9", logo: Img9 },
    { name: "Partner 10", logo: Img10 },
    { name: "Partner 11", logo: Img11 },
    { name: "Partner 12", logo: Img12 },
  ];

  return (
    <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-white">
          Target Lulusan Kami
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
          Lulusan kami dipersiapkan untuk meraih sukses di perguruan tinggi
          negeri favorit maupun universitas ternama dunia. Dengan kurikulum
          berkualitas dan bimbingan intensif, kami membantu setiap siswa
          menggapai cita-citanya di tingkat pendidikan yang lebih tinggi.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {targets.map((target, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={target.logo}
                alt={target.name}
                width={80}
                height={80}
                className="w-auto h-auto p-2 bg-white rounded-lg filter grayscale transition-transform duration-300 hover:scale-110 hover:neutralscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
