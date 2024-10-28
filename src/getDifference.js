import _ from 'lodash';

const getDifference = (object1, object2) => {
  const keys1 = _.keys(object1);
  const keys2 = _.keys(object2);
  const combinedKeys = _.sortBy(_.union(keys1, keys2));

  const result = combinedKeys.map((key) => {
    if (!Object.hasOwn(object1, key)) return `  + ${key}: ${object2[key]}\n`;
    if (!Object.hasOwn(object2, key)) return `  - ${key}: ${object1[key]}\n`;
    if (object1[key] !== object2[key]) return `  - ${key}: ${object1[key]}\n  + ${key}: ${object2[key]}\n`;
    return `    ${key}: ${object1[key]}\n`;
  });
  return `{\n${result.join('')}}`;
};

export default getDifference;
