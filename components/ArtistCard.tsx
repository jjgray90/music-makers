import Image from "next/image";
import Link from "next/link";

interface Artist {
  slug: string;
  name: string;
  genre: string;
  image: string;
}

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group block overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition"
    >
      <Image
        src={artist.image}
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
