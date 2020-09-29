import votesReducer, { increment } from './votes';

it('should have initial state', () => {

  // pass in undefined to trigger default value for state
  const state = votesReducer(undefined, {});

  expect(state.totalVotes).toBe(0);

  expect(state.candidates.length).toBe(3);

  const mary = state.candidates[0];
  const bob = state.candidates[1];
  const jamie = state.candidates[2];

  expect(mary.name).toBe('Mary');
  expect(bob.name).toBe('Bob');
  expect(jamie.name).toBe('Jamie');

  expect(mary.votes).toBe(0);
  expect(bob.votes).toBe(0);
  expect(jamie.votes).toBe(0);

});

it('should modify Mary votes', () => {

  const state = votesReducer(undefined, increment('Mary'));
  expect(state.totalVotes).toBe(1);

  const mary = state.candidates[0];
  const bob = state.candidates[1];
  const jamie = state.candidates[2];

  expect(mary.votes).toBe(1);
  expect(bob.votes).toBe(0);
  expect(jamie.votes).toBe(0);
});

it('should modify Mary votes after initial state', () => {

  const prevState = {
    candidates: [
      { name: 'Mary', votes: 10 },
      { name: 'Bob', votes: 20 },
      { name: 'Jamie', votes: 30 },
    ],
    totalVotes: 60,
  };

  const state = votesReducer(prevState, increment('Mary'));

  expect(state.totalVotes).toBe(61);

  const mary = state.candidates[0];
  const bob = state.candidates[1];
  const jamie = state.candidates[2];

  expect(mary.votes).toBe(11);
  expect(bob.votes).toBe(20);
  expect(jamie.votes).toBe(30);
});
