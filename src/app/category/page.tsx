import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const categories = [
  { title: "Technology", image: "/dummy-image.svg", articlesCount: 12 },
  { title: "Engineering", image: "/dummy-image.svg", articlesCount: 8 },
  { title: "Web Development", image: "/dummy-image.svg", articlesCount: 15 },
  { title: "Blockchain", image: "/dummy-image.svg", articlesCount: 10 },
  { title: "Artificial Intelligence", image: "/dummy-image.svg", articlesCount: 6 },
  { title: "Machine Learning", image: "/dummy-image.svg", articlesCount: 9 },
];

export default function CategoryPage() {
  return (
    <section className=" px-5 container mx-auto py-12 md:py-20">
      <div className="space-y-4 pb-16">
        <h2 className="text-3xl font-bold sm:text-5xl tracking-tight">Categories</h2>
        <p className="text-xl text-muted-foreground pt-1">Explore articles by category</p>
      </div>
      <div className="  grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ title, image, articlesCount }, index) => (
          <Card key={index} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b">
                <Image src={image} alt={title} width={400} height={200} className="w-full h-full object-cover" />
              </div>
            </CardHeader>
            <CardContent className="py-2">
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <Badge className="mt-2 bg-primary/30 text-primary shadow-none">{articlesCount} Articles</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
