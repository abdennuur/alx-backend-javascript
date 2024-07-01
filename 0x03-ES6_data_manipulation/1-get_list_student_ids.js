export default function getListStudentIds(stdts) {
  if (stdts instanceof Array) {
    return stdts.map((stdnt) => stdnt.id);
  }
  return [];
}
