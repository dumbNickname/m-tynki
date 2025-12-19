import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <footer class="bg-gray-900 text-white">
      <div class="container-custom py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/images/m-tynk_logo_greenw.png"
              alt="M-TYNK Logo"
              class="h-12 w-auto mb-4"
              width="300"
              height="81"
            />
            <p class="text-gray-300 text-sm leading-relaxed">
              Oferujemy Tynki Gipsowe z<br />
              Gładziolitem Wygładzającym pod<br />
              Malowanie. Nie potrzebujesz<br />
              dodatkowej warstwy gładzi!
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 class="text-xl font-heading font-semibold mb-4">Przydatne linki</h3>
            <ul class="space-y-2">
              <li>
                <A href="/" class="text-gray-300 hover:text-accent transition-colors">
                  Strona Główna
                </A>
              </li>
              <li>
                <A href="/tynki-ze-szlichta-pod-malowanie" class="text-gray-300 hover:text-accent transition-colors">
                  Tynki ze Szlichtą pod Malowanie
                </A>
              </li>
              <li>
                <A href="/#o-nas" class="text-gray-300 hover:text-accent transition-colors">
                  O nas
                </A>
              </li>
              <li>
                <A href="/kontakt" class="text-gray-300 hover:text-accent transition-colors">
                  Kontakt
                </A>
              </li>
              <li>
                <A href="/polityka-prywatnosci" class="text-gray-300 hover:text-accent transition-colors">
                  Polityka prywatności
                </A>
              </li>
            </ul>
          </div>

          {/* Social & Reviews */}
          <div>
            <h3 class="text-xl font-heading font-semibold mb-4">Oceń nas</h3>
            <a
              href="https://g.page/r/CQJV4JkgnlhYEAg/review"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mb-6"
            >
              <img
                src="/images/ocena-google.png"
                alt="Oceń nas na Google"
                class="w-32 h-32"
                width="150"
                height="150"
              />
            </a>
            
            <h3 class="text-xl font-heading font-semibold mb-4">Odwiedź nas</h3>
            <div class="flex gap-4">
              <a
                href="https://www.facebook.com/people/M-Tynk/100084565884606/?locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/firmamtynk/?igshid=NzZIODbkYWE4Ng%3D%3D"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div class="border-t border-gray-800">
        <div class="container-custom py-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              Copyright © 2022 <strong class="text-white">M-TYNK Z GŁADZIOLITEM WYGŁADZAJĄCYM POD MALOWANIE</strong>
            </p>
            <p>
              <a
                href="https://computersoft.net.pl/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-accent transition-colors"
              >
                Projekt i realizacja: ComputerSoft 2023
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
