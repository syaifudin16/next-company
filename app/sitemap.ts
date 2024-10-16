export default async function sitemap() {
  const routes = ["", "/about", "/admission", "/contact"].map((route) => ({
    url: `https://mbi-amanatulummah.sch.id${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
