export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  let flag = false;
  let newString = '';
  for (const s of set) {
    if (typeof s === 'string') {
      for (let i = 0; i < startString.length; i += 1) {
        if (s[i] === startString[i]) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
      if (flag) {
        newString += s.substring(startString.length);
        newString += '-';
      }
    }
  }
  return newString.slice(0, -1);
}
