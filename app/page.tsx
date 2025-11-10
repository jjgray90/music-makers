import Link from "next/link";
import { getFeaturedArtists } from "@/lib/data";
import { ArtistCard } from "@/components/ArtistCard";

export default async function HomePage() {
  const artists = getFeaturedArtists();

  return (
    <section className="text-center px-6 py-16">
      <h1 className="text-5xl font-serif mb-6">Live Music for Unforgettable Weddings</h1>
      <p className="text-lg text-gray-600 mb-12">
        Discover elegant, soulful, and timeless performances for your special day.
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {artists.map((artist) => (
          <ArtistCard key={artist.slug} artist={artist} />
        ))}
      </div>

      <Link
        href="/artists"
        className="mt-12 inline-block px-6 py-3 text-lg bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        View All Artists
      </Link>
    </section>
  );
}
