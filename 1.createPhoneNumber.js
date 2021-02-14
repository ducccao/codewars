function createPhoneNumber(n) {
  return (
    "(" +
    [n[0], n[1], n[2]].join("") +
    ")" +
    " " +
    [n[3], n[4], n[5]].join("") +
    "-" +
    [n[6], n[7], n[8], n[9]].join("")
  );
}

n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(n));
