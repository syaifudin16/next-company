import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
  {
    title: "10 Tips for Effective Learning",
    date: "2023-05-15",
    excerpt:
      "Discover the best strategies to enhance your learning process and retain information better.",
    image: "https://picsum.photos/400",
  },
  {
    title: "The Future of Education Technology",
    date: "2023-05-10",
    excerpt:
      "Explore how emerging technologies are shaping the future of education and transforming classrooms.",
    image: "https://picsum.photos/400",
  },
  {
    title: "Building a Growth Mindset",
    date: "2023-05-05",
    excerpt:
      "Learn how to develop a growth mindset and overcome challenges in your educational journey.",
    image: "https://picsum.photos/400",
  },
  {
    title: "The Benefits of Physical Activity",
    date: "2023-04-30",
    excerpt:
      "Discover the positive effects of regular physical activity on mental and physical health.",
    image: "https://picsum.photos/400",
  },
  {
    title: "The Benefits of Exercise",
    date: "2023-04-25",
    excerpt:
      "Discover the positive effects of regular exercise on mental and physical health.",
    image: "https://picsum.photos/400",
  },
  {
    title: "The Benefits of Meditation",
    date: "2023-04-20",
    excerpt:
      "Discover the positive effects of regular meditation on mental and physical health.",
    image: "https://picsum.photos/400",
  },
];

export default function Blog() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Berita
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Button variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button>View All Posts</Button>
        </div>
      </div>
    </section>
  );
}
