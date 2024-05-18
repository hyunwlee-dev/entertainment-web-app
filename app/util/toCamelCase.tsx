export const toCamelCase = (obj: any): any => {
  const newObj: any = {};
  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, match => match[1].toUpperCase());
    newObj[camelKey] = obj[key];
  }
  return newObj;
};
