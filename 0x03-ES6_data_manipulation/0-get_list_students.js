export default function getListStudents() {
  const list = [];
  const ob1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const ob2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const ob3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  list.push(ob1, ob2, ob3);
  return list;
}
