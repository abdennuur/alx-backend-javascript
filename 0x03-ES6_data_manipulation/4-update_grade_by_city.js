export default function updateStudentGradeByCity(stdnts, city, newGrades) {
  const dfltGrade = { grade: 'N/A' };

  if (stdnts instanceof Array) {
    return stdnts
      .filter((stdnt) => stdnt.location === city)
      .map((stdnt) => ({
        id: stdnt.id,
        frstName: stdnt.frstName,
        location: stdnt.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === stdnt.id)
          .pop() || dfltGrade).grade,
      }));
  }
  return [];
}
