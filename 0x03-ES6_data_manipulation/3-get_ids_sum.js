export default function getStudentIdsSum(stdnts) {
  if (stdnts instanceof Array) {
    return stdnts.reduce(
      (prevStdnt, curStdnt) => prevStdnt.id || prevStdnt + curStdnt.id,
      0,
    );
  }
  return 0;
}
