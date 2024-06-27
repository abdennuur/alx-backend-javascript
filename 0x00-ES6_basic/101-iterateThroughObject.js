export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const itm of reportWithIterator) {
    employees.push(itm);
  }
  return employees.join(' | ');
}
