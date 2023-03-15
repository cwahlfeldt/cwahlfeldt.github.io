module.exports = (config) => {
  // config.addCollection("autocompleteOptions", function (collectionApi) {
  //   const recipes = collectionApi.getFilteredByTag("recipes");
  //   return recipes.map((recipe) => ({
  //     label: recipe.data.title,
  //     url: recipe.url,
  //   }));
  // });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};