function zipLists(list1, list2) {


  /*

Input: list1, list2

                       c1/   fn1
head -> [1]  [3]  [2]  X
   v  / v  / v  /  v
head -> [5]  [9]  [4]  X
                       c2   fn2


                       c1/fn1
head -> [1]  [3]  [2]  X
   v  / v  / v  /  v /
head -> [5]  [9]  [4]  [12]
                       c2/fn2


currentNode1 starts at head of list1
currentNode2 starts at head of list2


while currentNode1.next AND currentNode2.next

  // success for Node [1] means it's next is [5] aka currentNode2

  //BUT we need to keep track of currentNode1's former next
  // SAFETY FIRST :
  formerNext1 = currentNode1.next
  currentNode1.next = currentNode2

  formerNext2 = currentNode2.next
  currentNode2.next = formerNext1

  currentNode1 = formerNext1
  currentNode2 = formerNext2

*/

  let currentNode1 = list1.head;
  let currentNode2 = list2.head;

  while (currentNode1 && currentNode2) {

    let formerNext1 = currentNode1.next;
    currentNode1.next = currentNode2;

    let formerNext2 = currentNode2.next;

    if (formerNext1) {
      currentNode2.next = formerNext1;
    } else {
      break;
    }

    currentNode1 = formerNext1;
    currentNode2 = formerNext2;
  }

  return list1;
}

module.exports = zipLists;
