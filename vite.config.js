import reactRefresh from "@vitejs/plugin-react-refresh"
import hljs from "highlight.js"
import { plugin as md, Mode } from "vite-plugin-markdown"
import markdownIt from "markdown-it"
import markdownItAttrs from "markdown-it-attrs"

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [
    reactRefresh(),
    md({
      mode: [Mode.HTML, Mode.TOC, Mode.REACT],
      markdown: (body) => {
        console.log(`body`, body)
      },
      markdownIt: markdownIt({
        linkify: true,
        typographer: true,
        highlight: (code, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, code).value
            } catch (__) {}
          }

          return ""
        },
      }).use(markdownItAttrs),
    }),
  ],
  build: {
    // sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          characters: ["/src/lessons/data/characters.json"],
          quotes: ["/src/lessons/data/quotes.json"],
          chakra: ["@chakra-ui/react"],
        },
      },
    },
  },
}
