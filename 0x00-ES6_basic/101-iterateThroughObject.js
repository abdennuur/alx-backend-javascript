export default function iterateThroughObject(reportWithIterator) {
  let op = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    op += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      op += ' | ';
    }
  }

  return op;
}
