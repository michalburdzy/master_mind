const checkPlayerBet = (gameNumbers, playerNumbers) => {
  const res = [0, 0];
  gameNumbers.forEach((num, i) => {
    if (gameNumbers.indexOf(playerNumbers[i]) !== -1) {
      res[0] += 1;
    }
    if (playerNumbers[i] === num) {
      res[1] += 1;
    }
  });
  return res;
};

export default checkPlayerBet;
