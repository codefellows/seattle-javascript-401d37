/* Algorithm

              (Jane Doe : 97)

        (Noob : 12)       (Lucky Pierre : 102)



- set closestSoFar as root of tree

check each bowler recursively // checkBowler(bowler) function

  // base case 1
  if no bowler then return

  // base case 2
  if bowler's score is equal to target then
    closestSoFar = bowler
    return

  if bowler's score closer than closestSoFar's score then
      closestSoFar = bowler

  if target < bowler's score then
    checkBowler(bowler.left)
  else
    checkBowler(bowler.right)


return closestSoFar


*/


function findClosestBowler(tree, target=100) {

  let closestSoFar = tree.root;

  function checkBowler(bowler) {

    if(!bowler) return;

    if(bowler.value.score === target) {
      closestSoFar = bowler;
      return;
    }

    const currentDistance = Math.abs(target - bowler.value.score);
    const closestDistance = Math.abs(target - closestSoFar.value.score);


    if (currentDistance < closestDistance) {
      closestSoFar = bowler;
    }


    if (target < bowler.value.score) {
      checkBowler(bowler.left);
    } else {
      checkBowler(bowler.right);
    }

  }

  checkBowler(closestSoFar);

  return closestSoFar && closestSoFar.value;

}

module.exports = findClosestBowler;
