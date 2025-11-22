import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

export function ArtistGallery({ images }: { images: SanityImage[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative aspect-square rounded-xl overflow-hidden"
        >
          <Image
            src={urlFor(img).width(800).height(800).auto("format").url()}
            alt={`Gallery image ${i + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
