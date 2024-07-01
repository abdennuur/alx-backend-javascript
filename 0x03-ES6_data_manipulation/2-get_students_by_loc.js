export default function getStudentsByLocation(stdnts, cty) {
  if (stdnts instanceof Array) {
    return stdnts.filter((stdnt) => stdnt.location === cty);
  }
  return [];
}
