import { Title, Meta, Link } from "@solidjs/meta";
import site from "~/data/site.json";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function SeoHead(props: SeoHeadProps) {
  const pageTitle = () => props.title ? `${props.title} - ${site.name}` : site.title;

  const jsonLd = () => {
    const graph: object[] = [];

    graph.push({
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.title,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}${site.logo}`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        areaServed: "PL",
        availableLanguage: "Polish",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Obornicka 77C/4A",
        addressLocality: "Wrocław",
        postalCode: "51-114",
        addressCountry: "PL",
      },
      sameAs: [site.facebookUrl, site.instagramUrl],
    });

    graph.push({
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.title,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "pl-PL",
    });

    const webPage: Record<string, unknown> = {
      "@type": "WebPage",
      "@id": props.canonical ? `${site.url}${props.canonical}` : site.url,
      url: props.canonical ? `${site.url}${props.canonical}` : site.url,
      name: pageTitle(),
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
      inLanguage: "pl-PL",
    };

    if (props.description) {
      webPage.description = props.description;
    }
    if (props.datePublished) {
      webPage.datePublished = props.datePublished;
    }
    if (props.dateModified) {
      webPage.dateModified = props.dateModified;
    }
    if (props.ogImage) {
      webPage.primaryImageOfPage = {
        "@type": "ImageObject",
        url: `${site.url}${props.ogImage}`,
      };
    }

    graph.push(webPage);

    if (props.breadcrumbs && props.breadcrumbs.length > 0) {
      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${props.canonical ? `${site.url}${props.canonical}` : site.url}#breadcrumb`,
        itemListElement: props.breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          ...(item.href ? { item: `${site.url}${item.href}` } : {}),
        })),
      });
    }

    return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  };

  return (
    <>
      <Title>{pageTitle()}</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <Meta name="google-site-verification" content={site.googleSiteVerification} />
      {props.description && <Meta name="description" content={props.description} />}
      <Meta property="og:locale" content="pl_PL" />
      <Meta property="og:type" content={props.ogType || "website"} />
      <Meta property="og:title" content={pageTitle()} />
      {props.description && <Meta property="og:description" content={props.description} />}
      <Meta property="og:site_name" content={site.title} />
      {props.ogImage && <Meta property="og:image" content={`${site.url}${props.ogImage}`} />}
      {props.canonical && (
        <>
          <Link rel="canonical" href={`${site.url}${props.canonical}`} />
          <Meta property="og:url" content={`${site.url}${props.canonical}`} />
        </>
      )}
      <Meta name="twitter:card" content="summary_large_image" />
      {props.dateModified && <Meta property="article:modified_time" content={props.dateModified} />}
      {props.canonical && <Link rel="alternate" hreflang="pl" href={`${site.url}${props.canonical}`} />}
      {props.canonical && <Link rel="alternate" hreflang="x-default" href={`${site.url}${props.canonical}`} />}
      <script type="application/ld+json" innerHTML={jsonLd()} />
    </>
  );
}
