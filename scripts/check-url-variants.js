const urls = [
  "http://zenakocleaning.co.za",
  "https://zenakocleaning.co.za",
  "http://www.zenakocleaning.co.za",
  "https://www.zenakocleaning.co.za",
  "http://zenakocleaning.co.za/services/carpet-cleaning",
  "https://zenakocleaning.co.za/services/carpet-cleaning",
  "http://www.zenakocleaning.co.za/services/carpet-cleaning",
  "https://www.zenakocleaning.co.za/services/carpet-cleaning",
  "https://www.zenakocleaning.co.za/robots.txt",
  "https://www.zenakocleaning.co.za/sitemap.xml",
];

async function check(url) {
  try {
    const res = await fetch(url, {
      redirect: "manual",
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    return {
      url,
      status: res.status,
      finalUrl: res.headers.get("location") || res.url,
      contentType: res.headers.get("content-type") || "",
    };
  } catch (error) {
    return {
      url,
      status: "ERROR",
      finalUrl: String(error),
      contentType: "",
    };
  }
}

async function main() {
  for (const result of await Promise.all(urls.map(check))) {
    console.log(
      `${result.url}\t${result.status}\t${result.finalUrl}\t${result.contentType}`,
    );
  }
}

main();
