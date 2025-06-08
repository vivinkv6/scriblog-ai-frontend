'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogCard() {

    const router=useRouter();

  return (
    <section className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
      <div className="space-y-4 pb-16 pl-4">
        <Badge className="bg-primary/30 text-primary shadow-none mb-2">
          Featured Blogs
        </Badge>
        <h2 className="text-3xl font-bold sm:text-5xl tracking-tight">
          Explore Our Latest Insights
        </h2>
        <p className="text-xl text-muted-foreground pt-1">
          Discover expert articles on technology, innovation, and engineering
        </p>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card key={i} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b">
                <img
                  src="/dummy-image.svg"
                  alt={i.toString()}
                  className="w-full h-full object-cover object-center lg:h-72"
                  width={800}
                  height={400}
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/30 text-primary shadow-none">
                  Technology
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  5 min read
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                A beginner&apos;s guide to blackchain for engineers
              </h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              <Button onClick={()=>router.push('/blog/1')} variant="link" className="pl-0 mt-3 shadow-none">
                Read more <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
