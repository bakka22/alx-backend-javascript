export default function hasValuesFromArray(set, array) {
  let flag = true;
  for (const a of array) {
    for (const s of set) {
      if (a !== s) {
        flag = false;
      } else {
        flag = true;
        break;
      }
    }
  }
  return flag;
}
