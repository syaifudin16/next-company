import { Button } from "@/components/ui/button";
import Image from "next/image";

const ctaData = [
  {
    title: "Join Our Community",
    description:
      "Be part of a growing network of professionals and enthusiasts.",
    image: "https://picsum.photos/600/400",
    stats: [
      { label: "Active Members", value: "10,000+" },
      { label: "Countries", value: "50+" },
      { label: "Events per Year", value: "100+" },
    ],
    cta: "Join Now",
  },
  {
    title: "Start Your Project",
    description:
      "Launch your next big idea with our powerful tools and support.",
    image: "https://picsum.photos/600/400",
    stats: [
      { label: "Projects Launched", value: "5,000+" },
      { label: "Success Rate", value: "89%" },
      { label: "Expert Mentors", value: "200+" },
    ],
    cta: "Get Started",
  },
];

export function CTASection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {ctaData.map((cta, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center mb-16 last:mb-0`}
          >
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src={cta.image}
                alt=""
                className="rounded-lg shadow-lg w-full h-auto"
                width={600}
                height={400}
              />
            </div>
            <div
              className={`w-full lg:w-1/2 ${
                index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                {cta.title}
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                {cta.description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {cta.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg">{cta.cta}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
