// Este es el árbol que queremos generar
//       10 --> Root
//   4       20 --> Incrementa
// 2   8   17   170
import Nodo from './MyNode';

class Tree {
	constructor() {
		// Primer nodo
		this.root = null;
	}
	insert(value) {
		const newNode = new Nodo(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			// Este while valida varias cosas.
			// Primero valida si el valor del nuevo nodo es mayor o menor al currentNode para saber si recorremos el árbol por la derecha o izquierda.
			// Segundo, digamos que escogió la derecha porque es mayor, en este punto validamos si existe un currentNode.right, si no existe, este nuevo nodo se convierte en el currentNode.right, si existe, cambiamos el currentNode por el .left que contenga, así bajamos un nivel de nodos hasta encontrar un nodo que no tenga un .left para guardar este nuevo nodo ahí
			while (true) {
				if (value < currentNode.value) {
					// Si no existe un nodo debajo del currentNode al lado izquierdo, que este nuevo nodo sea ese lado izquierdo
					// Lo ponemos en el lado izquierdo porque arriba validamos que ese nuevo nodo sea menor a su nodo padre
					if (!currentNode.left) {
						currentNode.left = newNode;
						// Retornamos this para que el while no sea infinito
						return this;
					}
					// Comenzamos por el root, como no existe un currentNode.left (arriba lo validamos), hacemos que el nuevo currentNode sea el left del antiguo currentNode, así empezamos a recorrer el árbol por la izquierda
					// Lo que hacemos es recorrer todos los nodos left hasta que encontremos uno de estos que no tengan su left para posicionar ese newNode ahí
					currentNode = currentNode.left;
					// Si el valor del newNode es mayor al currentNode
				} else {
					if (!currentNode.right) {
						// Si no existe un nodo en la derecha, que este sea el nuevo nodo
						currentNode.right = newNode;
						return this;
					}
					// En este caso si existe un nodo en el lado derecho, entonces tomamos ese nodo nuevo y lo ponemos como el currentNode, y empieza otra vez el while
					currentNode = currentNode.right;
				}
			}
		}
	}
	search(value) {
		// hacemos un while que retorna el currentNode cuando coincida con el valor por parámetro
		// si no coincide, validamos si es mayor o menor el valor que el currentNode.value, y de esa forma decidimos el nuevo valor que tomará el currentNode, si es menor el value, el currentNode pasa a ser el left, y si no, pasa a ser el right hasta encontrar la coincidencia de igualdad de values
		let currentNode = this.root;
		// Lo pongo mientras exista el currentNode para que no busque el .left o .right en los últimos nodos, lo cual retorna un error
		while (currentNode) {
			if (value === currentNode.value) {
				return currentNode;
			} else if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			}
		}
	}
}

const tree = new Tree();
