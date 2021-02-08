import Nodo from './MyNode';

// El Stack va ligado como la LinkedList donde hay referencias al siguiente elemento
class Stack {
	constructor() {
		// El elemento que está arriba
		this.top = null;
		// El primer elemento del stack
		this.bottom = null;
		this.length = 0;
	}
	// regresa el último elemento agregado
	peek() {
		return this.top;
	}
	// Agrega un elemento al final de la fila
	push(value) {
		const newNode = new Nodo(value);
		if (this.length === 0) {
			// El top y bottom es el mismo porque solo hay un elemento
			this.top = newNode;
			this.bottom = newNode;
		} else {
			// guardamos el top que será reemplazado por el nuevo nodo
			const holdingPointer = this.top;
			this.top = newNode;
			// Aquí el top es el nuevo nodo, por lo que a este en su atributo next le guardamos el que antes era el top del Stack
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}
	pop() {
		const currentTop = this.top;
		if (this.length === 1) {
			this.top = null;
			this.bottom = null;
		} else {
			this.top = this.top.next;
		}
		this.length--;
		return currentTop;
	}
}

const myStack = new Stack();
