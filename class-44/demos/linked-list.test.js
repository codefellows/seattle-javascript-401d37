const LinkedList = require('./linked-list');

it('should instantiate', () => {
  const list = new LinkedList();
  expect(list).toBeTruthy();
});

it('should insert one', () => {
  const list = new LinkedList();
  list.insert('apple');
  expect(list.head.value).toBe('apple');
});

it('should insert two', () => {
  const list = new LinkedList();
  list.insert('apple');
  list.insert('banana');
  expect(list.head.value).toBe('banana');
  expect(list.head.next.value).toBe('apple');
});

it('should insert three', () => {
  const list = new LinkedList();
  list.insert('apple');
  list.insert('banana');
  list.insert('cucumber');
  expect(list.head.value).toBe('cucumber');
  expect(list.head.next.value).toBe('banana');
  expect(list.head.next.next.value).toBe('apple');
});

it('should insert three as array', () => {
  const list = new LinkedList(['apple','banana', 'cucumber']);
  expect(list.head.value).toBe('apple');
  expect(list.head.next.value).toBe('banana');
  expect(list.head.next.next.value).toBe('cucumber');
});

it('should iterate', () => {
  const produce = ['apple','banana', 'cucumber'];
  const list = new LinkedList(produce);
  const produceArr = [...list]; //?
  expect(produceArr).toEqual(expect.arrayContaining(produce)); // double WTF
  expect(produceArr.length).toBe(3);
  expect(produceArr[0]).toBe('apple');
  expect(produceArr[1]).toBe('banana');
  expect(produceArr[2]).toBe('cucumber');

  for(let value of list) {
    // console.log(item);
    // Do whatever the heck you want with each value
  }


  // expose the head of list so that custom tasks can be performed

  // list.toString() //?
  // call list.logItems

  // expect(produceArr).toStrictEqual(produce); // WTF???
});

it('should traverse', () => {

  const produce = ['apple','banana', 'cucumber'];
  const list = new LinkedList(produce);

  let hasBanana = false;

  list.traverse(value => {
    if (value === 'banana') {
      hasBanana = true;
    }
  });

  expect(hasBanana).toBe(true);

});

it('should exit early when found', () => {

  const produce = ['apple','banana', 'cucumber'];
  const list = new LinkedList(produce);

  let hasBanana = false;

  let count = 0;

  for(let val of list) {
    if(val === 'banana') {
      hasBanana = true;
      break;
    }
    count += 1;
  }

  expect(hasBanana).toBe(true);
  expect(count).toBe(1); // just checking we really exited early

});




