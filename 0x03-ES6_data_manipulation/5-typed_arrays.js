export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buFF = new DataView(new ArrayBuffer(length), 0, length);
  buFF.setInt8(position, value);
  return buFF;
}
