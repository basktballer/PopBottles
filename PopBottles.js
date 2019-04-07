function bottleCalculator(spend) {
  var bottlesPurchased = Math.floor(spend / 2);
  var totalBottles = bottlesPurchased;
  var bottlesonHand = bottlesPurchased;
  var capsonHand = bottlesPurchased;
  var earnedCaps = 0;
  var earnedBots = 0;
  while (bottlesonHand > 1 || capsonHand > 3) {
    if (bottlesonHand > 1) {
      totalBottles += Math.floor(bottlesonHand / 2);
      capsonHand += Math.floor(bottlesonHand / 2);
      earnedBots += Math.floor(bottlesonHand / 2);
      bottlesonHand = Math.floor(bottlesonHand / 2) + (bottlesonHand%2);
    }
    if (capsonHand > 3) {
      totalBottles += Math.floor(capsonHand / 4);
      bottlesonHand += Math.floor(capsonHand / 4);
      earnedCaps += Math.floor(capsonHand / 4);
      capsonHand = Math.floor(capsonHand / 4) + (capsonHand%4);
    }    
  }
  console.log(`TOTAL BOTTLES: ${totalBottles}`);
  console.log(`REMAINING BOTTLES: ${bottlesonHand}`);
  console.log(`REMAINING CAPS: ${capsonHand}`);
  console.log('TOTAL EARNED: ');
  console.log(` BOTTLES: ${earnedBots}`);
  console.log(` CAPS: ${earnedCaps}`);



  return;
}

function getInput() {
  var input = process.argv.slice(2);
  return input;
}

bottleCalculator(getInput());