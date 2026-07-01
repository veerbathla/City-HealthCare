import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "t3utrnug",
  dataset: "cityhealthcare", 
  apiVersion: "2024-01-01",
  useCdn: false,
});