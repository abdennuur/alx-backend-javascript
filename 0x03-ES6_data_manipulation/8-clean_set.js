export default function cleanSet(set, startStr) {
  const prts = [];
  if (!set || !startStr || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startStr)) {
      const valueSubStr = value.substring(startStr.length);

      if (valueSubStr && valueSubStr !== value) {
        prts.push(valueSubStr);
      }
    }
  }
  return prts.join('-');
}
