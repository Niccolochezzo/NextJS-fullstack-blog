import { definePreview } from "next-sanity/preview";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

export const usePreview = definePreview({
  projectId: "2ir04nrj",
  dataset: "production",
  onPublicAccessOnly,
});
