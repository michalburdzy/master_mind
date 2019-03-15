const getNumbers = () => {
  let res = [];
  while (res.length < 3) {
    let num = Math.floor(Math.random() * 10);
    if (res.indexOf(num) === -1) {
      res.push(num);
    }
  }
  return res;
};
export default getNumbers;
