import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";

const eventItems = [
  {
    title: "Summer Workshop Series",
    date: "2023-06-15",
    time: "10:00 AM - 2:00 PM",
    image: "https://picsum.photos/100",
  },
  {
    title: "Annual Science Fair",
    date: "2023-07-20",
    time: "9:00 AM - 5:00 PM",
    image: "https://picsum.photos/100",
  },
  {
    title: "Parent-Teacher Conference",
    date: "2023-08-05",
    time: "3:00 PM - 7:00 PM",
    image: "https://picsum.photos/100",
  },
  {
    title: "Back to School Night",
    date: "2023-08-25",
    time: "6:00 PM - 8:00 PM",
    image: "https://picsum.photos/100",
  },
];

export default function Events() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Acara Mendatang
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventItems.map((item, index) => (
            <Card key={index}>
              <CardContent className="flex items-center space-x-4 py-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <CalendarDays className="h-4 w-4 mr-1" /> {item.date}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1" /> {item.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button>View All Events</Button>
        </div>
      </div>
    </section>
  );
}
