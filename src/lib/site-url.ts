/**
 * Production site URL, used for canonical, og:url, og:image, sitemap and JSON-LD.
 *
 * No custom domain is configured yet. Once you have one, set the environment
 * variable VITE_SITE_URL (e.g. https://www.yourdomain.com) in your deployment
 * settings — everything below picks it up automatically. Until then the site
 * falls back to relative URLs, which stay valid on any host.
 */
const raw = (import.meta.env["VITE_SITE_URL"] as string | undefined) ?? "";

export const SITE_URL = raw.replace(/\/+$/, "");

/** Absolute URL when a domain is configured, otherwise a root-relative path. */
export function siteUrl(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

/** Social preview image (an existing CK Gym photo copied to /public). */
export const OG_IMAGE = siteUrl("/og-cover.jpg");
