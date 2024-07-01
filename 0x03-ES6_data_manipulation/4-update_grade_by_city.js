export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  const fltrStudents = students.filter(
    (student) => student.location === city,
  );

  const gradeStdnts = fltrStudents.map(
    (student) => {
      for (const gradeInfo of newGrades) {
        if (student.id === gradeInfo.studentId) {
          student.grade = gradeInfo.grade;
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A';
      }
      return student;
    },
  );

  return gradeStdnts;
}
