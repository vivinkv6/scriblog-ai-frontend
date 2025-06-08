import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding Smart Contracts",
      category: "Technology",
      image: "/dummy-image.svg",
      readTime: "6 min read",
      description:
        "Learn the fundamentals of smart contracts and their applications in blockchain technology.",
    },
    {
      title: "Web3 Development Basics",
      category: "Technology",
      image: "/dummy-image.svg",
      readTime: "7 min read",
      description:
        "A comprehensive guide to getting started with Web3 development and decentralized applications.",
    },
    {
      title: "Cryptography for Developers",
      category: "Technology",
      image: "/dummy-image.svg",
      readTime: "8 min read",
      description:
        "Essential cryptography concepts every developer should know for secure application development.",
    },
  ];

  return (
    <section className=" pl-4 container mx-auto py-12 md:py-20">
      <div className="space-y-4 pb-16">
        <h1 className="text-3xl font-bold sm:text-5xl tracking-tight">
          Blog & Insights
        </h1>
        <p className="text-xl text-muted-foreground pt-1">
          Discover the latest articles, tutorials, and thought leadership in
          technology and innovation
        </p>
      </div>
      <div className=" px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/30 text-primary shadow-none">
                  {post.category}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {post.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
              <Button variant="link" className="pl-0 mt-3 shadow-none">
                Read more <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
