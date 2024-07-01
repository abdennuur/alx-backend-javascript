export default function getStudentsByLocation(students, cty) {
  if (students instanceof Array) {
    return students.filter((stdnt) => stdnt.location === cty);
  }
  return [];
}
