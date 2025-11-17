import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

interface Artist {
  slug: string;
  name: string;
  genre: string;
  image: SanityImage;
}

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group block overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <Image
        src={urlFor(artist.image)
          .width(1600) // higher base width
          .height(1067) // keep aspect ratio-ish if you want
          .fit("crop") // optional: crop to fit
          .auto("format") // let Sanity pick WebP/AVIF etc
          .quality(90) // bump quality if needed
          .url()}
        alt={artist.name}
        width={1600}
        height={1067}
        className="h-64 w-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="p-4 text-center bg-white">
        <h3 className="text-xl font-medium transition-colors group-hover:text-black">
          {artist.name}
        </h3>
        <p className="text-gray-500">{artist.genre}</p>
      </div>
    </Link>
  );
}
