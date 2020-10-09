/*

123 ==> 124

Input:
  [1] -> [2] -> [3] -> null

Output:
  [1] -> [2] -> [4] -> null



  // get to last node in list
  // increment it's value


  Input:
  [1] -> [2] -> [9] -> null

Output:
  [1] -> [2] -> [10] -> null BAD
  [1] -> [3] ->  [0] -> null GOOD


  AHA MOMENT - reverse?!?!?!?

  Input:
  [1] -> [2] -> [9] -> null

  // 1. reversed it

  // start at the head

  // increment the current node's value

  [10] -> [2] -> [1] -> null

  // check if value > 9

  // if so...
    // set current value to 0
    [0] -> [2] -> [1] -> null

    // carry the 1
    // in other words increment next
    // actually, hold on to the value to carry and add that next time
    [0] -> [3] -> [1] -> null


  // reverse it again!!

  [1] -> [3] ->  [0] -> null GOOD


  // what is case of another digit being needed?
  // if at end AND the updated current value > 9

*/

// in place and increment by 1

function odometer(numList) {

  numList.reverse();

  let current = numList.head;

  // 19 ===  [9] -> [1] -> null

  // [0] -> [0] -> [2] -> null
  //                ^

  // reversed
  // [9] -> [9] -> null  ==> [0] -> [0] -> [1] -> null

  // [0] -> [9] -> null
  // [0]  -> [0] -> null
  // [1] -> [0] -> [0] -> null



  /*

    89 reversed to
    [9] -> [8] -> null
    [10] -> [8] -> null
    [0] -> [8] -> null
    [0] -> [9] -> null
            ^

    reverse back to [9] -> [0] -> null

  */
  current.value += 1; // 10

  while(current.value > 9) {

    current.value = 0;

    // look at next and increment that
    if(current.next) {
      current.next.value += 1;
      current = current.next;
    } else {

      // current.next = numList.append(1); // add the now needed additional digit

      // would be dreamy to avoid O(n)

      // numList.reverse();

      // numList.insert(1); // O(1) ftw!

      current.next = new Node(1);

    }

    numList.reverse();
  }
}

module.exports = odometer;
