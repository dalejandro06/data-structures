/*
    2 - 0
  /  \
  1 - 3

*/

// Edge list
// Esta es una lista de arrays que representa las conexiones del grafo de arriba
const graph = [
	[2, 0],
	[2, 1],
	[2, 3],
	[1, 3]
];

// Adjacent List
// Representa el grafo a través de índices, que serían los nodos
// Así serían los índices
// El 0 es el nodo 0, se pone el 2 porque el 0 solo conecta con el 2
// El índice 1 conecta con el 2 y 3
// El índice 2 conecta con el 0 3 y 1
//              0     1         2       3
const graph = [[2], [2, 3], [0, 3, 1], [1, 2]];

// HashTable
// Casi lo mismo que la Adjacent List pero los índices están explícitos
const graph = {
	0: [2],
	1: [2, 3],
	2: [0, 1, 3],
	3: [1, 2]
};

// Adjacent Matrix
// Es un array donde cada nodo tiene su propio array de 0 y 1, donde 1 es si conecta con el nodo en la posición del Array, y 0 si no conecta.
const graph = [
	// Este es el nodo 0, tiene un 1 en la posición 2 porque conecta con el nodo 2 en el grafo de arriba
	[0, 0, 1, 0],
	// Este es el nodo 1, tiene un 1 en la posición 2  y 3 porque conecta con esos nodos.
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0]
];

// Adjacent matrix pero en un objeto
// El key es el nodo en el grafo, y el value son los nodos con los que se conecta si sale un 1 donde la posición del array sea la misma que el nodo
const graph = {
	0: [0, 0, 1, 0],
	1: [0, 0, 1, 1],
	2: [1, 1, 0, 1],
	3: [0, 1, 1, 0]
};

class Graph {
	constructor() {
		// Se lleva la cuenta de los nodos que se van agregando
		this.nodes = 0;
		// El tipo de grafo con el que se va a trabajar
		this.adjacentList = {};
	}
	addVertex(node) {
		// Crea un key con el valor del nodo y como value es un array vacío
		// Se hace así porque estamos trabajando solo con números
		// Aunque también se podría de esta forma this.adjacentList[this.nodes] = [], lo que hace es que toma el length del grafo y lo convierte en una key con su array vacío
		this.adjacentList[node] = [];
		this.nodes++;
	}
	// Aquí estamos añadiendo las "líneas" o los edges que conectan los nodos entre sí.
	// Estamos añadiendo los bordes manualmente, y lo que hace es que añadir los nodos en los que se conecta cada nodo en su array de nodos conectados.
	addEdge(node1, node2) {
		// Lo que estamos haciendo es tomar el nodo1 y añadir a ese array el nodo2, así los estamos conectando entre sí.
		this.adjacentList[node1].push(node2);
		// Como es un grafo dirigido, tenemos que tomar los dos nodos y hacer un push del otro nodo a su lista de nodos conectados
		this.adjacentList[node2].push(node1);
	}
}
