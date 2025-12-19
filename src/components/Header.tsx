import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const navItems = [
    { href: "/", label: "Strona Główna" },
    { href: "/#o-nas", label: "O Nas" },
    { href: "/tynki-ze-szlichta-pod-malowanie", label: "Tynki ze szlichtą pod malowanie" },
    { href: "/realizacje", label: "Realizacje" },
    { href: "/galeria", label: "Galeria" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header class="sticky top-0 z-50 bg-primary shadow-md">
      <div class="container-custom">
        {/* Desktop Header */}
        <div class="hidden lg:flex items-center justify-between py-4">
          <A href="/" class="flex-shrink-0">
            <img
              src="/images/mtynk-logo-gladziolit.png"
              alt="M-TYNK Logo - Tynki ze Szlichtą pod Malowanie Wrocław"
              class="h-16 w-auto"
              width="467"
              height="97"
            />
          </A>
          
          <div class="flex items-center gap-8">
            <a
              href="tel:+48535157036"
              class="btn-secondary text-white border-white hover:bg-white hover:text-primary"
            >
              +48 535 157 036
            </a>
            
            <nav class="flex items-center gap-6">
              {navItems.map((item) => (
                <A
                  href={item.href}
                  class="text-white hover:text-accent transition-colors font-medium"
                  activeClass="text-accent"
                >
                  {item.label}
                </A>
              ))}
            </nav>
          </div>
        </div>

        {/* Tablet Header */}
        <div class="hidden md:flex lg:hidden items-center justify-between py-4">
          <A href="/" class="flex-shrink-0">
            <img
              src="/images/mtynk-logo-gladziolit.png"
              alt="M-TYNK Logo"
              class="h-12 w-auto"
              width="467"
              height="97"
            />
          </A>
          
          <div class="flex items-center gap-4">
            <a
              href="tel:+48535157036"
              class="btn-secondary text-white border-white hover:bg-white hover:text-primary text-sm px-6 py-3"
            >
              +48 535 157 036
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
              class="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div class="flex md:hidden items-center justify-between py-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
            class="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <A href="/" class="flex-shrink-0">
            <img
              src="/images/mtynk-logo-gladziolit.png"
              alt="M-TYNK Logo"
              class="h-10 w-auto"
              width="467"
              height="97"
            />
          </A>
          
          <a
            href="tel:+48535157036"
            class="text-white p-2"
            aria-label="Zadzwoń"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <Show when={mobileMenuOpen()}>
        <div class="lg:hidden bg-white border-t border-gray-200">
          <nav class="container-custom py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <A
                href={item.href}
                class="px-4 py-3 text-secondary hover:bg-gray-100 rounded-lg transition-colors"
                activeClass="bg-primary/10 text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </A>
            ))}
          </nav>
        </div>
      </Show>
    </header>
  );
}
