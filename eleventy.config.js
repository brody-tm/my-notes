module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");

  return {
    pathPrefix: "/my-notes/",
    dir: {
      output: "docs"
    },
  };
};