// 1 <--> 2 <--> 3 <--> 4 <--> 5 <--> null;
import Nodo from './MyNode';

class DoubleLinkedList {
	constructor(value) {
		// obligamos a iniciar la linkedList con un valor que se le pase
		this.head = {
			value: value,
			next: null,
			prev: null
		};
		// La cola apunta a la cabeza, porque no existe otro valor
		this.tail = this.head;
		// Por defecto es uno porque se obliga a que se inicie con un valor
		this.length = 1;
	}
	append(value) {
		const newNode = new Nodo(value);
		// Como estamos agregando un nuevo nodo a la cola, el prev de este nuevo nodo será el nodo que era antes la cola
		newNode.prev = this.tail;
		// La cola siempre es null, como se puede ver arriba, por lo que si queremos agregar un nuevo nodo, tenemos que cambiar ese null por el nodo
		this.tail.next = newNode;
		// Ya no apuntamos al head, si no al último nodo de la lista
		// antes de este paso, la cola es el elemento anterior al que acabamos de agregar, por eso referenciamos la cola al nuevo nodo
		this.tail = newNode;
		this.length++;
		// Nos devuelve toda la lista
		return this;
	}
}

let myList = new DoubleLinkedList();
