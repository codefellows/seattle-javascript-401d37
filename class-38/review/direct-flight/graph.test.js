const { Graph, Vertex } = require('./graph.js');

it('should add', () => {

  const graph = new Graph();
  const victoria = new Vertex('Victoria');
  const vince = new Vertex('Vince')

  graph.addVertex(victoria);
  graph.addVertex(vince);

  expect(graph.adjacencyList.get(victoria).length == 0);
expect(graph.adjacencyList.get(vince).length == 0);

})

it('should make Victoria know about Vince', () => {

  const graph = new Graph();
  const victoria = new Vertex('Victoria');
  const vince = new Vertex('Vince')

  graph.addVertex(victoria);
  graph.addVertex(vince);

  graph.addEdge(victoria, vince);

  const victoriasConnections = graph.adjacencyList.get(victoria);

  expect(victoriasConnections.length == 1);

  const firstFriendEverMade = victoriasConnections[0].vertex;

  expect(firstFriendEverMade.value === 'Vince')

  const vincesConnections = graph.adjacencyList.get(vince);

  expect(vincesConnections.length == 1);

});
