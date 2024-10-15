export default async function sitemap() {
  const routes = ["", "/ppdb", "/contact"].map((route) => ({
    url: `https://mbi-amanatulummah.sch.id${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
