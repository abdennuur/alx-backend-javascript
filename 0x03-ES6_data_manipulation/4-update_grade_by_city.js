export default function updateStudentGradeByCity(ls, city, newGrade) {
  return ls
    .filter((obj) => obj.location === city)
    .map((student) => {
      newGrade.map((stdntGrade) => {
        if (stdntGrade.studentId === student.id) {
          student.grade = stdntGrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
