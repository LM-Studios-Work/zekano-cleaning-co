const SITEMAP_URL = "https://www.zenakocleaning.co.za/sitemap.xml";

async function fetchUrl(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    return {
      code: response.status,
      finalUrl: response.url,
      body: await response.text(),
    };
  } catch (error) {
    return {
      code: null,
      finalUrl: url,
      body: String(error),
    };
  }
}

function sitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) =>
    match[1].trim(),
  );
}

function canonicalUrl(html) {
  const relFirst = html.match(
    /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i,
  );
  const hrefFirst = html.match(
    /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i,
  );
  return (relFirst || hrefFirst)?.[1]?.trim() || "";
}

function comparableUrl(url) {
  return url.replace(/\/$/, "");
}

async function main() {
  const sitemap = await fetchUrl(SITEMAP_URL);
  if (sitemap.code !== 200) {
    console.log(
      `ERROR: sitemap fetch failed: code=${sitemap.code} final=${sitemap.finalUrl}`,
    );
    console.log(sitemap.body.slice(0, 500));
    process.exit(1);
  }

  const urls = sitemapUrls(sitemap.body);
  console.log(`Found ${urls.length} URLs in sitemap\n`);
  console.log("URL\tSTATUS\tFINAL_URL\tCANONICAL\tRESULT");
  console.log("-".repeat(160));

  let bad = 0;
  for (const url of urls) {
    const page = await fetchUrl(url);
    const canonical = page.code === 200 ? canonicalUrl(page.body) : "";
    const result = [];

    if (page.code !== 200) result.push(`HTTP_${page.code}`);
    if (comparableUrl(page.finalUrl) !== comparableUrl(url)) {
      result.push("REDIRECT_OR_REWRITE");
    }
    if (canonical) {
      if (comparableUrl(canonical) !== comparableUrl(page.finalUrl)) {
        result.push("CANONICAL_MISMATCH");
      }
    } else {
      result.push("NO_CANONICAL");
    }

    const verdict = result.length ? result.join(",") : "OK";
    if (result.length) bad += 1;

    console.log(
      `${url}\t${page.code}\t${page.finalUrl}\t${canonical}\t${verdict}`,
    );
  }

  console.log("\nSummary:");
  console.log(`Problem URLs: ${bad}/${urls.length}`);
}

main();
