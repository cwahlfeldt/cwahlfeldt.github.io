exports.render = data => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Waffles - ${ data.title }</title>
      </head>
      <body>
        <h1>${ data.title }</h1>
        ${ data.content }
      </body>
    </html>
  `
}
