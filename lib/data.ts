export const mockArtists = [
    {
      slug: "billy-sax",
      name: "Billy Sax",
      genre: "Saxophonist & DJ",
      image: "/artists/billy-sax.jpg",
      bio: "A delicate blend of acoustic guitar and harmonies — perfect for ceremonies and receptions.",
      instagram: "https://instagram.com/billy_sax",
    },
    {
      slug: "midnight-soul",
      name: "Midnight Soul",
      genre: "Soul Band",
      image: "/artists/midnightsoul.jpg",
      bio: "Elegant soul and Motown classics performed by a 6-piece live band.",
      youtube: "https://youtube.com/midnightsoul",
    },
  ];
  
  export async function getFeaturedArtists() {
    return mockArtists.slice(0, 2);
  }
  
  export async function getAllArtists() {
    return mockArtists;
  }
  
  export async function getArtistBySlug(slug: string) {
    console.log("hello")
    return mockArtists.find((artist) => slug === artist.slug);
  }
  