import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";

export default function KontaktPage() {
  return (
    <Layout
      title="Kontakt - M-TYNK Wrocław | Tynki ze Szlichtą pod Malowanie"
      description="Skontaktuj się z nami! M-TYNK Wrocław - profesjonalne tynki gipsowe. Tel: +48 535 157 036. Obsługujemy Wrocław i okolice."
      canonical="https://wroclawtynki.pl/kontakt"
    >
      <PageHeader
        title="Kontakt"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "Kontakt" }
        ]}
      />

      <section class="py-16 lg:py-24">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-heading font-bold mb-6">Skontaktuj się z nami</h2>
                <div class="w-20 h-1 bg-accent mb-8"></div>
                
                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Telefon</h3>
                      <a href="tel:+48535157036" class="text-secondary-light hover:text-primary">
                        +48 535 157 036
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Lokalizacja</h3>
                      <p class="text-secondary-light">
                        Wrocław i okolice
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-lg mb-1">Godziny pracy</h3>
                      <p class="text-secondary-light">
                        Pon - Pt: 8:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-accent/10 p-6 rounded-lg">
                <h3 class="font-semibold text-lg mb-3">Zapraszamy do kontaktu!</h3>
                <p class="text-secondary-light">
                  Chętnie odpowiemy na wszystkie pytania i umówimy się na wizytę na budowie, aby pokazać jakość naszych tynków.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h2 class="text-2xl font-heading font-bold mb-6">Wyślij wiadomość</h2>
              
              <form class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-secondary mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-secondary mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-secondary mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" class="btn-primary w-full">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
