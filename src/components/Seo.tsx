import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { dropStaticHeadFallbacks } from "@/lib/head-fallbacks";
import { absoluteUrl, seoPages, type SeoPath } from "@/lib/seo";

/**
 * Per-route <head> tags. Googlebot executes JavaScript, so each route can own
 * its own title, description and canonical; social crawlers that do not
 * execute JS fall back to the sitewide tags in index.html.
 */
const Seo = ({ path }: { path: SeoPath }) => {
  const { title, description } = seoPages[path];
  const url = absoluteUrl(path);

  useEffect(dropStaticHeadFallbacks, []);

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
