import { Title, Meta, Link } from "@solidjs/meta";
import { ParentProps } from "solid-js";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps extends ParentProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function Layout(props: LayoutProps) {
  const title = () => props.title || "Tynki ze Szlichtą pod Malowanie - M-TYNK Wrocław";
  const description = () => props.description || "Profesjonalne tynki gipsowe ze szlichtą gładziolitu wygładzającego pod malowanie. Firma M-TYNK Wrocław - doświadczenie od 1999 roku.";
  const canonical = () => props.canonical || "https://wroclawtynki.pl/";
  const ogImage = () => props.ogImage || "https://wroclawtynki.pl/images/og-image.jpg";

  return (
    <>
      <Title>{title()}</Title>
      <Meta name="description" content={description()} />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta charset="UTF-8" />
      
      {/* Open Graph */}
      <Meta property="og:locale" content="pl_PL" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title()} />
      <Meta property="og:description" content={description()} />
      <Meta property="og:url" content={canonical()} />
      <Meta property="og:site_name" content="M-TYNK Wrocław" />
      <Meta property="og:image" content={ogImage()} />
      
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title()} />
      <Meta name="twitter:description" content={description()} />
      <Meta name="twitter:image" content={ogImage()} />
      
      {/* Canonical */}
      <Link rel="canonical" href={canonical()} />
      
      {/* Favicon */}
      <Link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192x192.png" />
      <Link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      
      {/* Fonts */}
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "M-TYNK",
          "description": "Profesjonalne tynki gipsowe ze szlichtą gładziolitu wygładzającego pod malowanie",
          "url": "https://wroclawtynki.pl",
          "telephone": "+48535157036",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wrocław",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.1079",
            "longitude": "17.0385"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/people/M-Tynk/100084565884606/",
            "https://www.instagram.com/firmamtynk/"
          ]
        })}
      </script>

      <div class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-grow">
          {props.children}
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
