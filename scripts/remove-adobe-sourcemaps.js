const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent) => {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) walkDir(full, callback);
    else callback(full);
  });
}

const root = path.join(__dirname, '..', 'node_modules', '@adobe');
if (!fs.existsSync(root)) {
  console.log('No @adobe folder found in node_modules — nothing to do.');
  process.exit(0);
}

let changed = 0;
walkDir(root, (file) => {
  if (!/\.mjs$|\.js$|\.cjs$/.test(file)) return;
  try {
    let content = fs.readFileSync(file, 'utf8');
    const newContent = content
      .replace(/\/\/# sourceMappingURL=.*(?:\r?\n)?/g, '')
      .replace(/\/\*# sourceMappingURL=.*?\*\//gs, '');
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      changed++;
      console.log('Cleaned sourceMappingURL in', file.replace(process.cwd() + path.sep, ''));
    }
  } catch (e) {
    // skip unreadable files
  }
});

console.log(`Done. Files modified: ${changed}`);
