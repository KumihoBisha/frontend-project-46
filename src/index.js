import fs from 'fs';
import path from 'path';
import parse from './parse.js';

const getParsedFile = (filepath) => {
  const format = path.extname(filepath);
  const data = fs.readFileSync(filepath, 'utf8');
  return parse(data, format);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getParsedFile(filepath1);
  const data2 = getParsedFile(filepath2);
  console.log(data1);
  console.log(data2);
};

export default genDiff;
