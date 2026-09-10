import yaml from "js-yaml";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // sort a collection of pages by their `order` front matter
  eleventyConfig.addFilter("byOrder", (collection) =>
    [...collection].sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
  );

  // group people by a key (e.g. building) for the directory page
  eleventyConfig.addFilter("groupByKey", (items, key) => {
    const groups = new Map();
    for (const item of items) {
      const k = item[key] ?? "TBD";
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(item);
    }
    return [...groups.entries()].map(([name, members]) => ({ name, members }));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // served/integrated as a subsection of the main site
    pathPrefix: "/onboarding/",
  };
}
