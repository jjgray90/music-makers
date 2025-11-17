import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import type { Image as SanityImage } from "sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
