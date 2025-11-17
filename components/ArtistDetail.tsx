import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

interface Artist {
  name: string;
  genre: string;
  bio: string;
  image: SanityImage;
  vimeo?: string;
  instagram?: string;
  youtube?: string;
}

export function ArtistDetail({ artist }: { artist: Artist }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
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
        className="rounded-2xl mb-8 mx-auto"
      />
      <h1 className="text-4xl font-semibold mb-4">{artist.name}</h1>
      <p className="text-gray-600 mb-6 italic">{artist.genre}</p>
      <p className="text-lg leading-relaxed text-gray-700">{artist.bio}</p>

      <iframe
        src={artist.vimeo}
        width="100%"
        height="400"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

      <div className="mt-8 flex gap-6 justify-center">
        {artist.instagram && (
          <a
            href={artist.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-700 underline transition-colors hover:text-black"
          >
            Instagram
          </a>
        )}
        {artist.youtube && (
          <a
            href={artist.youtube}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-700 underline transition-colors hover:text-black"
          >
            YouTube
          </a>
        )}
      </div>
    </article>
  );
}
