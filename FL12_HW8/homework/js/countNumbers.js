function makeNumber(string) {
  let stringNum = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(Number(string[i]))) {
          stringNum += string[i];
    }
  }
  return stringNum;
}

function countNumbers(string) {
  let nums = makeNumber(string);
  let numsCount = {};

  for (let number of nums) {
    if (!(number in numsCount)) {
        numsCount[number] = 1;
    } else {
        numsCount[number] += 1;
    }
  }
  return numsCount;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
