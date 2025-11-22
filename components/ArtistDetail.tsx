import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";
import { ArtistCarousel } from "./ArtistCarousel";

interface Artist {
  name: string;
  genre: string;
  bio: string;
  image: SanityImage;
  gallery: SanityImage[];
  vimeo?: string;
  instagram?: string;
  youtube?: string;
}

export function ArtistDetail({ artist }: { artist: Artist }) {
  const hasGallery = artist.gallery && artist.gallery.length > 0;

  return (
    <article className="max-w-4xl mx-auto px-6 py-6">

      {/* HEADER */}
      <header className="text-center mb-6">
        <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-wide mb-3">
          {artist.name}
        </h1>
        <p className="text-gray-500 italic text-xl">{artist.genre}</p>
      </header>

      {/* HERO IMAGE / CAROUSEL */}
      <section className="mb-6">
        {hasGallery ? (
          <ArtistCarousel images={artist.gallery} />
        ) : (
          <div className="rounded-2xl overflow-hidden shadow">
            <Image
              src={urlFor(artist.image)
                .width(1600)
                .height(1067)
                .fit("crop")
                .auto("format")
                .quality(90)
                .url()}
              alt={artist.name}
              width={1600}
              height={1067}
              className="object-cover"
            />
          </div>
        )}
      </section>

      {/* BIO */}
      <section className="mt-12 mb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
            {artist.bio}
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      {artist.vimeo && (
        <section className="mt-16">
          <h2 className="text-2xl font-serif text-center mb-4 text-gray-700">
            Watch {artist.name} Perform
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={artist.vimeo}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>
      )}

    </article>
  );
}
