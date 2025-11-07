import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zvvmo6ll",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});