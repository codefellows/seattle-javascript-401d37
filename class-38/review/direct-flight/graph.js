class Graph {

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      // bail and/or throw error
      return;
    }

    if (!this.adjacencyList.has(endVertex)) {
      // bail and/or throw error
      return;
    }

    const adjacencies = this.adjacencyList.get(startVertex);

    const edge = new Edge(endVertex, weight);

    adjacencies.push(edge);
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

}

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

function hasDirectFlights(graph, airports) {

  let isPossible = true;
  let cost = 0;

  for (let i = 0; i < airports.length - 1; i++) {

    const airport = airports[i];
    const destination = airports[i + 1];


    const directConnections = graph.getNeighbors(airport);

    console.log(directConnections);
    console.log(destination);

    let directFound = false;

    for (let connection of directConnections) {

      if (connection.vertex === destination) {
        directFound = true;
        cost += connection.weight;
        break;
      }
    }

    if(!directFound) {
      isPossible = false;
      cost = 0;
      break;
    }

  }

  return {
    isPossible,
    cost,
  };

}

module.exports = { Graph, Edge, Vertex, hasDirectFlights };
