import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import { getHighlighter, createCssVariablesTheme, bundledLanguages, codeToHtml } from 'shiki';

const customTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
});

let highlighter;

// parse meta string to get highlighted lines
const parseHighlightLines = (meta) => {
  const metaArray = meta.split(' ');
  let highlightLines = [];

  if (metaArray[0].includes('{')) {
    const highlightString = metaArray[0];
    const highlightStringArray = highlightString.split('{')[1].split('}')[0].split(',');
    highlightLines = highlightStringArray.reduce((result, item) => {
      if (item.includes('-')) {
        const range = item.split('-');
        const start = parseInt(range[0], 10);
        const end = parseInt(range[1], 10);
        for (let i = start; i <= end; i += 1) {
          result.push(i);
        }
      } else {
        result.push(parseInt(item, 10));
      }
      return result;
    }, []);
  }

  return highlightLines;
};

export default async function highlight(code, lang = 'bash', meta = '', theme = customTheme) {
  let language = lang.toLocaleLowerCase();

  // check if language is supported
  if (!Object.keys(bundledLanguages).includes(lang) && lang !== 'text') {
    language = 'bash';
  }

  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: [language],
      themes: [theme],
    });
  }

  const html = codeToHtml(code, {
    lang: language,
    theme,
    transformers: [
      {
        pre(node) {
          // eslint-disable-next-line no-param-reassign
          node.properties['data-language'] = language;
        },
        code(node) {
          // eslint-disable-next-line no-param-reassign
          node.properties.class = 'grid';
        },
        line(node, line) {
          // eslint-disable-next-line no-param-reassign
          node.properties['data-line'] = line;

          if (meta) {
            const highlightedLines = parseHighlightLines(meta);

            highlightedLines.forEach((item) => {
              if (item === line) {
                // eslint-disable-next-line no-param-reassign
                node.properties['data-highlighted-line'] = true;
              }
            });
          }
        },
      },
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
    ],
  });

  await highlighter.loadLanguage(language);

  return html;
}

// used to highlight code block in code tabs
export const getHighlightedCodeArray = async (items) => {
  let highlightedItems = [];

  try {
    highlightedItems = await Promise.all(
      items.map(async (item) => {
        let codeContent = item?.code;

        if (typeof codeContent === 'object') {
          codeContent = JSON.stringify(codeContent, null, 2);
        }
        // item.highlight in blog post component CodeTabs
        const highlightedCode = await highlight(codeContent, item.language, `{${item.highlight}}`);

        return highlightedCode;
      })
    );
  } catch (error) {
    // We are silencing the error here intentionally.
    // If the code highlighting fails, we want to return an empty array
    // and let the UI handle it gracefully instead of crashing the page.
  }

  return highlightedItems;
};
