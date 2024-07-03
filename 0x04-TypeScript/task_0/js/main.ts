
/**
 * Write an interface named Studentthat accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create 1 students, and create an array named studentsList
 * containing the 1 variables
 */

const student1: Student = {
  firstName: 'abdennour',
  lastName: 'khatib',
  age: 23,
  location: 'khouribga',
};

const student2: Student = {
  firstName: 'simo',
  lastName: 'taos',
  age: 26,
  location: 'khouribga',
};

const studentsList: Array<Student> = [
  student1,
  student2,
];


/**
 * - Using Vanilla Javascript, render a table and for each elements in the array,
 * append new row to the table
 * 
 * - Each row should contain the first name of the student and the location
 */

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
