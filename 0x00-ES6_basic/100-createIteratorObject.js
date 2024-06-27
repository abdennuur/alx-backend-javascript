export default function createIteratorObject(report) {
  const myArr = [];
  for (const item of Object.values(report.allEmployees)) {
    myArr.push(...item);
  }

  return myArr;
}
