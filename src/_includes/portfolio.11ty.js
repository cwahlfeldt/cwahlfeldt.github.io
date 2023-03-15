const portfolio = (data) => /*html*/ `
  <div class="portfolio">
    ${data.collections.portfolio
      .map(({ data }) => `<h2>${data.title}</h2>`)
      .join("\n")}
  </div>
`;

exports.render = portfolio;
