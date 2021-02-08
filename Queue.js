import Nodo from './MyNode';

class Queue {
	constructor() {
		// El primer elemento que entró
		this.first = null;
		// El último elemento que entró
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	// Agrega un elemento al final de la fila
	enqueue(value) {
		const newNode = new Nodo(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	dequeue() {
		const firstNode = this.first;
		if (this.length === 0) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.length--;
		return firstNode;
	}
}

const myQueue = new Queue();
