function bottleCalculator(spend) {
  var bottlesPurchased = Math.floor(spend / 2)
  var result = {
    bottlesPurchased: bottlesPurchased, 
   totalBottles: bottlesPurchased,
   bottlesonHand: bottlesPurchased,
   capsonHand: bottlesPurchased,
   earnedCaps: 0,
   earnedBots: 0
  }

  while (result.bottlesonHand > 1 || result.capsonHand > 3) {
    if (result.bottlesonHand > 1) {
      result.totalBottles += Math.floor(result.bottlesonHand / 2);
      result.capsonHand += Math.floor(result.bottlesonHand / 2);
      result.earnedBots += Math.floor(result.bottlesonHand / 2);
      result.bottlesonHand = Math.floor(result.bottlesonHand / 2) + (result.bottlesonHand%2);
    }
    if (result.capsonHand > 3) {
      result.totalBottles += Math.floor(result.capsonHand / 4);
      result.bottlesonHand += Math.floor(result.capsonHand / 4);
      result.earnedCaps += Math.floor(result.capsonHand / 4);
      result.capsonHand = Math.floor(result.capsonHand / 4) + (result.capsonHand%4);
    }    
  }
  return result;
}

function getInput() {
  var input = process.argv.slice(2);
  return input;
}

var calculated = bottleCalculator(getInput());
console.log(`TOTAL BOTTLES: ${calculated.totalBottles}`);
console.log(`REMAINING BOTTLES: ${calculated.bottlesonHand}`);
console.log(`REMAINING CAPS: ${calculated.capsonHand}`);
console.log('TOTAL EARNED: ');
console.log(` BOTTLES: ${calculated.earnedBots}`);
console.log(` CAPS: ${calculated.earnedCaps}`);