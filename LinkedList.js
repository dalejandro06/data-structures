// 1-- > 2-- > 3-- > 4-- > 5-- > null;
import Nodo from './MyNode';

class SingleLinkedList {
	constructor(value) {
		// obligamos a iniciar la linkedList con un valor que se le pase
		this.head = {
			value: value,
			next: null
		};
		// La cola apunta a la cabeza, porque no existe otro valor
		this.tail = this.head;
		// Por defecto es uno porque se obliga a que se inicie con un valor
		this.length = 1;
	}
	append(value) {
		const newNode = new Nodo(value);
		// La cola siempre es null, como se puede ver arriba, por lo que si queremos agregar un nuevo nodo, tenemos que cambiar ese null por el nodo
		this.tail.next = newNode;
		// Ya no apuntamos al head, si no al último nodo de la lista
		// antes de este paso, la cola es el elemento anterior al que acabamos de agregar, por eso referenciamos la cola al nuevo nodo
		this.tail = newNode;
		this.length++;
		// Nos devuelve toda la lista
		return this;
	}
	prepend(value) {
		const newNode = new Nodo(value);
		// Como va a ser el primer nodo, necesitamos obtener el que es el primer nodo en la lista actual, y guardarlo en el next del que será el primer nuevo nodo
		newNode.next = this.head;
		// Despues de guardar el primer nodo en el next del nodo que se insertará, insertamos el nuevo nodo en el head de la lista
		this.head = newNode;
		this.length++;
		// Devuelve toda la lista
		return this;
	}
	insert(value, index) {
		if (index >= this.length) {
			// Si el indice que llega es mayor a la longitud de la lista, significa que el nodo se quiere insertar al final, por lo que hacemos un append.
			return this.append(value);
		}
		const newNode = new Nodo(value);
		// Estamos obteniendo el nodo anterior del indice que llega para meter este nuevo nodo en el next de el nodo anterior
		const firstPointer = this.getIndex(index - 1);
		// Obtenemos el next actual del firstPointer que se convertirá en el next del nodo que insertemos.
		const holdingPointer = firstPointer.next;
		// Asignamos al next del nodo con el indice anterior al que llega por parametro, el nuevo nodo
		firstPointer.next = newNode;
		// El next del firstPointer pasa a ser el next del nuevo nodo, ya que lo que hacemos es agregar el nodo en la mitad del anterior y el siguiente nodo.
		newNode.next = holdingPointer;
		this.length++;
		return this;
	}
	getIndex(index) {
		// Tenemos que ir pasando por cada uno de los nodos para encontrar el indice que le pasamos por parametro
		let counter = 0;
		// El nodo actual es la cabeza porque el loop empieza desde la cabeza siempre
		let currentNode = this.head;
		// mientras el counter sea diferente del indice, asignamos el nodo actual al next del nodo actual, así estamos recorriendo la lista desde la cabeza(por eso se asignó el currentNode al head), y vamos sumandole al counter para que así recorra la lista
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}
	// Obtiene un array de valores y los mete en la lista
	fromArray(values) {
		values.forEach((value) => this.append(value));
		return this;
	}
}

let myList = new SingleLinkedList();
