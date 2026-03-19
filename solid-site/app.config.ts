import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/kontakt",
        "/realizacje",
        "/galeria",
        "/tynki-ze-szlichta-pod-malowanie",
        "/polityka-prywatnosci",
        "/realizacje/tynk-wraz-z-zabudowa-gk-i-malowaniem",
        "/realizacje/tynk-na-gladko-pod-malowanie",
        "/realizacje/tynki-ze-szlichta-pod-malowanie-wroclaw",
        "/realizacje/tynkowanie-scian-pod-malowanie",
        "/realizacje/tynkowanie-scian-we-wroclawiu",
        "/realizacje/tynkowanie-w-domu-jednorodzinnym",
        "/category/wszystkie",
        "/category/malowanie-scian",
        "/category/tynk-ze-szlichta-wygladzajaca",
        "/category/zabudowy-z-plyt-gk",
      ],
    },
  },
});
