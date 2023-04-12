import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2ir04nrj",
  dataset: "production",
  apiVersion: "2023-04-11",
  useCdn: true,
});
