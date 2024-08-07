interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const st1 : Student = {
    firstName: 'bakka',
    lastName: 'saleem',
    age: 25,
    location: 'cairo',
};
const st2 : Student = {
    firstName: 'tom',
    lastName: 'saleem',
    age: 65,
    location: 'cairo',
};
const studentsList : Array<Student> = [st1, st2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';



thead.append(th1);
thead.append(th2);

table.append(thead);


studentList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.location;

  column1.style.border = '1px solid gray';
  column2.style.border = '1px solid gray';
  column1.style.padding = '.5rem';
  column2.style.padding = '.5rem';

  row.append(column1);
  row.append(column2)

  table.append(row);
});

body.append(table)
