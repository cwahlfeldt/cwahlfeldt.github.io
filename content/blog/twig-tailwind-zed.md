+++
title = "Get Tailwind to work in Zed for Twig"
date = 2025-06-20

[taxonomies]
tags = ["tailwind", "twig", "php", "code", "frontend", "zed"]
+++

Getting tailwind to work in Zed for Twig was a little weird. Found this <a href="https://github.com/zed-industries/zed/issues/16548#issuecomment-2309813740" target="_blank">comment</a> in an issue and thought it was a good idea to share it here.

<!-- more -->

```
"languages": {
  "Twig": {
    "language_servers": [
      "tailwindcss-language-server",
      "Twig Language Server"
    ]
  }
},
"lsp": {
  "tailwindcss-language-server": {
    "settings": {
      "tailwindCSS": {
        "emmetCompletions": true,
        "includeLanguages": {
          "twig": "html",
          "Twig": "html",
          "*.twig": "html",
          "plaintext": "html"
        },
        "experimental": {
          "classRegex": [
            "class=\"([^\"]*)",
            "class={\"([^\"}]*)",
            "class=format!({\"([^\"}]*)"
          ]
        }
      }
    }
  }
}
  ```
