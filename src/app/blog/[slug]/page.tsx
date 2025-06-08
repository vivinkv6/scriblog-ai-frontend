import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ShareButton } from "@/components/ui/custom/ShareButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BlogPost {
  title: string;
  category: string;
  tags: string[];
  content: string;
  featuredImage: string;
  date: string;
  readTime: string;
}

export default function BlogDetailPage() {
  const blogPost: BlogPost = {
    title: "A Beginner's Guide to Blockchain for Engineers",
    category: "Technology",
    tags: ["Blockchain", "Engineering", "Web3"],
    content: `
      <p className="lead">
        Blockchain technology is revolutionizing the way we think about
        data storage and transfer. In this comprehensive guide, we'll
        explore the fundamentals of blockchain and how engineers can
        leverage this technology.
      </p>
      <h2>What is Blockchain?</h2>
      <p>
        At its core, a blockchain is a distributed database that
        maintains a continuously growing list of records, called blocks,
        which are linked and secured using cryptography.
      </p>
      <h2>Key Features of Blockchain</h2>
      <ul>
        <li>Decentralization</li>
        <li>Immutability</li>
        <li>Transparency</li>
        <li>Security</li>
      </ul>
      <h2>Blockchain Architecture</h2>
      <p>
        The architecture of a blockchain system typically consists of
        several key components:
      </p>
      <ol>
        <li>Nodes</li>
        <li>Consensus Mechanism</li>
        <li>Smart Contracts</li>
        <li>Cryptographic Algorithms</li>
      </ol>
      <h2>Applications of Blockchain</h2>
      <p>
        Blockchain technology has found applications in various
        industries, including:
      </p>
      <ul>
        <li>Financial Services</li>
        <li>Supply Chain Management</li>
        <li>Healthcare</li>
        <li>Real Estate</li>
      </ul>
      <h2>Getting Started with Blockchain Development</h2>
      <p>
        For engineers looking to dive into blockchain development, here
        are some essential steps:
      </p>
      <ol>
        <li>Learn the fundamentals of cryptography</li>
        <li>Understand distributed systems</li>
        <li>Choose a blockchain platform</li>
        <li>Start with smart contract development</li>
      </ol>
    `,
    featuredImage: "/dummy-image.svg",
    date: "August 15, 2023",
    readTime: "5 min read"
  };

  const relatedPosts = [
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
      readTime: "9 min read",
      description: "A beginner's guide to understanding blockchain technology and its applications."
    },
    {
      title: "Blockchain Security Basics",
      category: "Technology",
      image: "/dummy-image.svg",
      readTime: "10 min read",
      description: "Explore the fundamental security principles and best practices in blockchain technology."
    }
  ];

  return (
    <>
    <section className="container mx-auto py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
          <ShareButton />
        </div>

        <article className="space-y-8">
          <div className="aspect-video bg-muted w-full rounded-lg overflow-hidden">
            <Image
              src={blogPost.featuredImage}
              alt="Blog cover"
              width={1200}
              height={630}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-3">
            <Badge className="bg-primary/30 text-primary shadow-none">
              {blogPost.category}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {blogPost.date} • {blogPost.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap gap-2 mt-4">
            {blogPost.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>
        </article>

      </div>
      <section className=" px-5 mt-20">
          <h2 className="text-2xl font-bold mb-8">Related Blogs</h2>
          <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((post, index) => (
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
                  <p className="mt-2 text-muted-foreground">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
    </section>
    </>
  );
}
