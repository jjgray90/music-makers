import { use } from 'react';
import { getArtistBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArtistDetail } from "@/components/ArtistDetail";

export default function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const artist = use(getArtistBySlug(slug));
  if (!artist) return notFound();

  return (
    <ArtistDetail artist ={artist}/>
  );
}
