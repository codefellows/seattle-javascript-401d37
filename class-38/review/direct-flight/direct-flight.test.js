const { Graph, Vertex, hasDirectFlights } = require('./graph.js');


it('should do Metroville-Pandora', () => {

  const graph = new Graph();

  // [Metroville, Pandora, ]
  const Metroville = new Vertex('Metroville');

  const Pandora = new Vertex('Pandora');

  graph.addVertex(Metroville);
  graph.addVertex(Pandora);

  graph.addEdge(Metroville, Pandora, 82);

  const result = hasDirectFlights(graph, [Metroville,Pandora]);

  expect(result.isPossible);
  expect(result.cost).toBe(82);

});

it('should do Metroville-Pandora', () => {

  const graph = new Graph();

  // [Metroville, Pandora, ]
  const Metroville = new Vertex('Metroville');

  const Pandora = new Vertex('Pandora');

  graph.addVertex(Metroville);
  graph.addVertex(Pandora);

  graph.addEdge(Metroville, Pandora, 82);

  const result = hasDirectFlights(graph, [Metroville,Pandora]);

  expect(result.isPossible).toBe(true);
  expect(result.cost).toBe(82);

});

it('[Arendelle, New Monstropolis, Naboo]	True, $115', () => {

  const graph = new Graph();

  const Arendelle = new Vertex('Arendelle');

  const NewMonstropolis = new Vertex('New Monstropolis');

  const Naboo = new Vertex('Naboo');

  graph.addVertex(Arendelle);
  graph.addVertex(NewMonstropolis);
  graph.addVertex(Naboo);

  graph.addEdge(Arendelle, NewMonstropolis, 42);
  graph.addEdge(NewMonstropolis, Naboo, 73);

  const result = hasDirectFlights(graph, [Arendelle,NewMonstropolis,Naboo]);

  expect(result.isPossible).toBe(true);
  expect(result.cost).toBe(115);

});

it('[Naboo, Pandora]	False, $0', () => {

  const graph = new Graph();

  const Naboo = new Vertex('Naboo');

  const Pandora = new Vertex('Pandora');

  graph.addVertex(Naboo);
  graph.addVertex(Pandora);

  const result = hasDirectFlights(graph, [Naboo,Pandora]);

  expect(result.isPossible).toBe(false);
  expect(result.cost).toBe(0);

});


it('[Narnia, Arendelle, Naboo]	False, $0', () => {

  const graph = new Graph();

  const Narnia = new Vertex('Narnia');

  const Arendelle = new Vertex('Arendelle');

  const Naboo = new Vertex('Naboo');

  graph.addVertex(Narnia);
  graph.addVertex(Arendelle);
  graph.addVertex(Naboo);

  graph.addEdge(Narnia, Naboo, 250);

  const result = hasDirectFlights(graph, [Narnia,Arendelle,Naboo]);

  expect(result.isPossible).toBe(false);
  expect(result.cost).toBe(0);

});

