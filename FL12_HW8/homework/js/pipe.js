function addOne(x) {
  return x + 1;
}
function pipe (arg) {
  for (let i = 1; i < arguments.length; i++) {
    arg = arguments[i](arg);
  }

  return arg;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
