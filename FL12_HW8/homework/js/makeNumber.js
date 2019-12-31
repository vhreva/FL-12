function makeNumber(string) {
  let stringNum = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(Number(string[i]))) {
          stringNum += string[i]
    }
  }
  return stringNum;
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');
