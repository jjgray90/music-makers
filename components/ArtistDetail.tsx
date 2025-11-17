import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

interface Artist {
  name: string;
  genre: string;
  bio: string;
  image: SanityImage;
  instagram?: string;
  youtube?: string;
}

export function ArtistDetail({ artist }: { artist: Artist }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Image
        src={urlFor(artist.image).width(600).url()}
        alt={artist.name}
        width={600}
        height={400}
        className="rounded-2xl mb-8 mx-auto"
      />
      <h1 className="text-4xl font-semibold mb-4">{artist.name}</h1>
      <p className="text-gray-600 mb-6 italic">{artist.genre}</p>
      <p className="text-lg leading-relaxed text-gray-700">{artist.bio}</p>

      <div className="mt-8 flex gap-6 justify-center">
        {artist.instagram && (
          <a
            href={artist.instagram}
            target="_blank"
            className="text-gray-700 hover:text-black underline"
          >
            Instagram
          </a>
        )}
        {artist.youtube && (
          <a
            href={artist.youtube}
            target="_blank"
            className="text-gray-700 hover:text-black underline"
          >
            YouTube
          </a>
        )}
      </div>
    </article>
  );
}
