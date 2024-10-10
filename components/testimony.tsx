import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Student",
    content:
      "The education I received here has been transformative. The teachers are passionate and the curriculum is challenging yet engaging.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Bob Smith",
    role: "Parent",
    content:
      "I've seen remarkable growth in my child's academic performance and confidence since enrolling here. The supportive environment has made all the difference.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Charlie Brown",
    role: "Alumni",
    content:
      "The skills and knowledge I gained during my time at this institution have been invaluable in my professional career. I'm grateful for the foundation it provided.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Diana Ross",
    role: "Teacher",
    content:
      "It's a privilege to work in such a supportive and innovative educational environment. We're truly making a difference in our students' lives.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ethan Hunt",
    role: "Student",
    content:
      "The extracurricular activities and clubs have allowed me to explore my interests and develop new skills outside of the classroom. It's been an amazing journey.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Fiona Apple",
    role: "Parent",
    content:
      "The staff's dedication to each student's success is evident in everything they do. We couldn't be happier with our choice to enroll our child here.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function Testimony() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Apa Yang Mereka Katakan
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Testimoni dari santri, alumni, dan orang tua tentang pengalaman
          belajar di MBI Amanatul Ummah. Mereka merasakan pendidikan yang
          berkualitas dan pembentukan karakter yang kuat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
