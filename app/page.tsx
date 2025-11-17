import Link from "next/link";
import { getFeaturedArtists } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { ArtistCard } from "@/components/ArtistCard";

export default async function HomePage() {
  const artists = getFeaturedArtists();

  return (
    <>
      <Hero />
      <section className="text-center px-6 py-16">
        <h2 className="text-3xl font-serif mb-10 text-center">
          Our Featured Artists
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>

        <Link
          href="/artists"
          className="mt-12 inline-block px-6 py-3 text-lg bg-black text-white rounded-md transition-colors hover:bg-gray-800"
        >
          View All Artists
        </Link>
      </section>
    </>
  );
}
