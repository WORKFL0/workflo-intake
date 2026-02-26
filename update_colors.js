import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.css') || dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  content = content.replace(/#fcd34d/g, '#f2f400');
  content = content.replace(/252, 211, 77/g, '242, 244, 0');
  content = content.replace(/#fbbf24/g, '#e0e200'); // Slightly darker/equivalent for hover
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
