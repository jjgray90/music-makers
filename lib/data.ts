import { client } from "@/sanity/client";
import type { Image as SanityImage } from "sanity";
  
  const query = `*[_type == "artist"] | order(name asc) {
    name,
    genre,
    image,
    "slug": slug.current,
    bio,
    instagram,
    youtube
  }`;

  interface Artist {
    slug: string;
    name: string;
    genre: string;
    bio: string;
    image: SanityImage;
    instagram?: string;
    youtube?: string;
  }
  
  const artists: Artist[] = await client.fetch(query);
  
  export const getArtists = () => artists;

  export const getFeaturedArtists = () => artists.slice(0, 2);
  
  export function getArtistBySlug(slug: string) {
    return artists.find((artist) => artist.slug === slug);
  }
  