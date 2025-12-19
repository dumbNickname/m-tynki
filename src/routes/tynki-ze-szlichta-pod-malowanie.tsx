import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";

export default function TynkiPage() {
  return (
    <Layout
      title="Tynki ze Szlichtą pod Malowanie - M-TYNK Wrocław"
      description="Tynki gipsowe ze szlichtą gładziolitu wygładzającego pod malowanie. Profesjonalne wykonanie, gładkie ściany gotowe do malowania bez dodatkowej gładzi."
      canonical="https://wroclawtynki.pl/tynki-ze-szlichta-pod-malowanie"
    >
      <PageHeader
        title="Tynki ze Szlichtą pod Malowanie"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "Tynki ze szlichtą pod malowanie" }
        ]}
      />

      {/* Main Content Section */}
      <section class="py-16 lg:py-24">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  TYNKI GIPSOWE ZE SZLICHTĄ GŁADZIOLITU WYGŁADZAJĄCEGO POD MALOWANIE
                </h2>
                <div class="w-20 h-1 bg-accent mb-6"></div>
                
                <div class="space-y-4 text-secondary-light leading-relaxed">
                  <p>
                    Nasza Firma posiada w swojej ofercie coś, co wyróżnia ją na tle innych firm zajmujących się tynkowaniem. Oferowane przez nas Tynki Gipsowe są wykańczane Szlichtą z GŁADZIOLITEM Wygładzającym, która nadaje gładkość tynkowanej ścianie. Dzięki Gładziolitowi, ściany i sufity w pomieszczeniu są perfekcyjnie równe i można od razu po wyschnięciu przejść do malowania.
                  </p>
                  <p>
                    Tynk ze Gładziolitem Wygładzającym powoduje brak konieczności wykonywania dodatkowej gładzi na powierzchni tynku. Brak konieczności stosowania gładzi prowadzi do oszczędności czasu i pieniędzy.
                  </p>
                  <p>
                    Na terenie Wrocławia, gdzie znajduje się siedziba naszej firmy, a także w okolicach, jesteśmy jedyną firmą, która stawia na Tynk Gipsowy z Gładziolitem Wygładzającym. Możemy się pochwalić szeregiem opinii naszych klientów, którzy chwalą nasze przywiązanie do detali, pracowitość i przede wszystkim jakość wykonanych tynków.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="flex justify-center">
              <img
                src="/images/tynki-ze-szlichta-pod-malowanie.jpg"
                alt="Tynki ze szlichtą pod malowanie - przykład wykonania"
                class="max-w-full h-auto rounded-lg shadow-xl"
                width="1125"
                height="2000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section class="py-16 lg:py-24 bg-gray-50">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="flex justify-center order-2 lg:order-1">
              <img
                src="/images/tyni-pod-malowanie.jpg"
                alt="Czym jest szlichta z gładziolitem"
                class="max-w-full h-auto rounded-lg shadow-xl"
                width="800"
                height="600"
              />
            </div>
            
            <div class="space-y-8 order-1 lg:order-2">
              <div>
                <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  CZYM JEST SZLICHTA Z GŁADZIOLITEM?
                </h2>
                <div class="w-20 h-1 bg-accent mb-6"></div>
                
                <p class="text-secondary-light leading-relaxed">
                  Szlichta z Gładziolitem wygładzającym jest niczym innym jak ostatnią warstwą nakładanego tynku. Można powiedzieć, że jest to warstwa dodatkowa, która nadaje gładkości ścianie i pozwala od razu przejść do malowania bądź położenia płytek. Jest to coś, co wymaga dodatkowej pracy, ale daje piorunujący efekt końcowy.
                </p>
              </div>
              
              <div>
                <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  GDZIE MOGĘ ZOBACZYĆ TYNK ZE SZLICHTĄ GŁADZIOLITU?
                </h2>
                <div class="w-20 h-1 bg-accent mb-6"></div>
                
                <p class="text-secondary-light leading-relaxed mb-6">
                  Jeśli chcą Państwo zapoznać się z tym jak wygląda Tynk ze Szlichtą Gładziolitu – zapraszamy na naszą aktualną budowę. Zawsze zapraszamy inwestorów, aby zapoznali się z jakością wykonywanych przez nas tynków. Dlatego też, w każdej sytuacji, prosimy o kontakt telefoniczny w celu umówienia się na wizytę. Na takiej wizycie opowiemy też więcej o wykonywanych Tynkach Gipsowych ze Szlichtą Gładziolitu, a także pokażemy, jak wygląda tynk bez szlichty gładziolitu oraz ze szlichtą gładziolitem.
                </p>
                
                <a
                  href="tel:+48535157036"
                  class="btn-primary inline-flex items-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Umów się na wizytę!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
