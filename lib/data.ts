export const mockArtists = [
    {
      slug: "billy-sax",
      name: "Billy Sax",
      genre: "Saxophonist & DJ",
      image: "",
      bio: "Billy Gray is committed to delivering an unforgettable musical experience for weddings and events. By combining upbeat & elegant saxophone, Billy crafts an enchanting ambiance that engages audiences. Each performance is customized to showcase the distinct style and personality of every client, guaranteeing a truly memorable celebration. With Billy, attention to detail is paramount. From the presence on the dance-floor to the seamless delivery, every aspect is meticulously planned to exceed expectations. With a repertoire spanning various genres and eras, he offers a diverse musical journey that resonates with all generations.",
      instagram: "https://instagram.com/billy_sax",
    },
    {
      slug: "midnight-soul",
      name: "Midnight Soul",
      genre: "Soul Band",
      image: "/artists/midnightsoul.jpg",
      bio: "Elegant soul and Motown classics performed by a 6-piece live band.",
      youtube: "https://youtube.com/",
    },
  ];


  import { client } from "@/sanity/client";
  
  
  export async function getArtists() {
    const query = `*[_type == "artist"] | order(name asc) {
      name,
      genre,
      "image": image.asset->url,
      "slug": slug.current
    }`;
    return await client.fetch(query);
  }

  
  export async function getFeaturedArtists() {
    return mockArtists.slice(0, 2);
  }
  
  export async function getAllArtists() {
    
    return mockArtists;
  }
  
  export function getArtistBySlug(slug: string) {
    console.log("hello")
    return mockArtists.find((artist) => artist.slug === slug);
  }
  