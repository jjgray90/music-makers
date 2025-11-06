import { getAllArtists } from "@/lib/data";
import { ArtistCard } from "@/components/ArtistCard";

export default async function ArtistsPage() {
  const artists = await getAllArtists();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-8 text-center">Our Artists</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {artists.map((artist) => (
          <ArtistCard key={artist.slug} artist={artist} />
        ))}
      </div>
    </section>
  );
}
