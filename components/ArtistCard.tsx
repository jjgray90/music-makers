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
      className="group block overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition"
    >
      <Image
        src={urlFor(artist.image).width(400).url()}
        alt={artist.name}
        width={400}
        height={300}
        className="h-64 w-full object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-4 text-center bg-white">
        <h3 className="text-xl font-medium group-hover:text-black">{artist.name}</h3>
        <p className="text-gray-500">{artist.genre}</p>
      </div>
    </Link>
  );
}
