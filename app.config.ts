import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: false,
  server: {
    preset: "static",
    prerender: {
      routes: ["/", "/tynki-ze-szlichta-pod-malowanie", "/galeria", "/kontakt", "/polityka-prywatnosci"],
      crawlLinks: true
    }
  }
});
