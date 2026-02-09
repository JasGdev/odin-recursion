export function fibs(value) {
  let list = [];

  for (let i = 0; i < value; i++) {
    if (i == 0) {
      list.push(0);
    } else if (i == 1) {
      list.push(1);
    } else {
      const newValue = list[i-2]+list[i-1];
      list.push(newValue);
    }
  }
  return list;
}

export function fibsRec(value, currSeq = 0, list = [], v1 = 0, v2 = 1) {
  if (currSeq == value){
    return list
  }
  if (currSeq == 0){
    list.push(0);
    return fibsRec(value, currSeq + 1, list, v1, v2);
  }
  else if (currSeq == 1){
    list.push(1);
    return fibsRec(value, currSeq + 1, list, v1, v2);
  }
  else {
    const newValue = v1 + v2;
    v1 = v2;
    v2 = newValue;

    list.push(newValue)
    return fibsRec(value, currSeq + 1, list, v1, v2);
  }
}