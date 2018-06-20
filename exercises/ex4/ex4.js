function lotteryNum() {
  return Math.round(Math.random() * 100) % 58 + 1;
}

function pickNumber(lotteryNumbers) {
  var tempLotteryNumbers = lotteryNumbers.slice(0);

  var newLotteryNumber = lotteryNum();

  if (!lotteryNumbers.hasOwnProperty(newLotteryNumber)) {
    tempLotteryNumbers.unshift(newLotteryNumber);
    tempLotteryNumbers.sort();
  }

  return tempLotteryNumbers;
}

var luckyLotteryNumbers = [];

for (var i = 0; i < 600; i++) {
  luckyLotteryNumbers = pickNumber(Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);

var tempArray = [1, 2, 3];
console.log(tempArray.hasOwnProperty(1));
