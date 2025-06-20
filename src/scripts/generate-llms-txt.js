/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */

const fs = require('fs').promises;
const path = require('path');

const content = [];

const readMarkdownFiles = async (src) => {
  // Read all items in the source directory
  const items = await fs.readdir(src, { withFileTypes: true });

  for (const item of items) {
    const srcPath = path.join(src, item.name);

    if (item.isDirectory()) {
      // If item is a directory, recurse
      await readMarkdownFiles(srcPath);
    } else if (item.isFile() && path.extname(item.name) === '.md') {
      // If item is a Markdown file, add it to the content array
      const txt = await fs.readFile(srcPath, 'utf8');
      content.push(txt);
    }
  }
};

(async () => {
  console.log('Generating llms.txt...');
  try {
    await readMarkdownFiles('public/md/docs');
    await fs.writeFile('public/llms.txt', content.join('\n\n'));
    console.log('Done generating llms.txt.');
  } catch (err) {
    console.error('Error occurred while generating llms.txt:', err);
  }
})();
