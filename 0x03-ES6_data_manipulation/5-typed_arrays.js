export default function createInt8TypedArray(len, positn, val) {
  if (positn >= len) {
    throw new Error('Position outside range');
  }
  const bufr = new DataView(new ArrBufr(len), 0, len);
  buf.setInt8(positn, val);
  return bufr;
}
