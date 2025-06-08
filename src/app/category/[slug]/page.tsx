import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ShareButton } from "@/components/ui/custom/ShareButton";

interface Category {
  title: string;
  description: string;
  featuredImage: string;
  blogs: {
    title: string;
    category: string;
    image: string;
    readTime: string;
    description: string;
  }[];
}

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const category: Category = {
    title: "Technology",
    description: "Explore the latest in technology and innovation",
    featuredImage: "/dummy-image.svg",
    blogs: [
      {
        title: "Understanding Smart Contracts",
        category: "Technology",
        image: "/dummy-image.svg",
        readTime: "6 min read",
        description: "Learn the fundamentals of smart contracts and their applications in blockchain technology."
      },
      {
        title: "Web3 Development Basics",
        category: "Technology",
        image: "/dummy-image.svg",
        readTime: "7 min read",
        description: "A comprehensive guide to getting started with Web3 development and decentralized applications."
      },
      {
        title: "Cryptography for Developers",
        category: "Technology",
        image: "/dummy-image.svg",
        readTime: "8 min read",
        description: "Essential cryptography concepts every developer should know for secure application development."
      },
      {
        title: "Blockchain for Beginners",
        category: "Technology",
        image: "/dummy-image.svg",
        readTime: "5 min read",
        description: "A beginner's guide to understanding blockchain technology and its applications."
      },
      {
        title: "The Future of AI in Content Creation",
        category: "Technology",
        image: "/dummy-image.svg",
        readTime: "6 min read",
        description: "Explore the potential of AI in content creation and how it can revolutionize the writing industry."
      },
      {
        title: "Mastering the Art of Blogging",
        category: "Writing",
        image: "/dummy-image.svg",
        readTime: "7 min read",
        description: "Learn how to create engaging and informative blog posts that captivate readers."
      }
    ]
  };

  return (
    <section className="container mx-auto py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" asChild>
            <Link href="/category" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Categories
            </Link>
          </Button>
          <ShareButton />
        </div>

        <div className="space-y-8">
          <div className="aspect-video bg-muted w-full rounded-lg overflow-hidden">
            <Image
              src={category.featuredImage}
              alt="Category cover"
              width={1200}
              height={630}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {category.title}
          </h1>

          <p className="text-xl text-muted-foreground">
            {category.description}
          </p>
        </div>

     
      </div>
         <section className="mt-20 px-4">
          <h2 className="text-2xl font-bold mb-8">Explore {category.title} Insights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.blogs.map((blog, index) => (
              <Card key={index} className="shadow-none overflow-hidden rounded-md">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted w-full border-b">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="py-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary/30 text-primary shadow-none">
                      {blog.category}
                    </Badge>
                    <span className="font-medium text-xs text-muted-foreground">
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {blog.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </section>
  );
}
