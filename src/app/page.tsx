import BlogCard from "@/components/ui/custom/BlogCard";
import { ImageSlider } from "@/components/ui/custom/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-5 w-full max-w-[100%]">
        <ImageSlider />
      </div>
      <BlogCard />
    </>
  );
}
