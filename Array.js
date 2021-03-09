class MyArray {
	constructor() {
		this.length = 0;
		// Save new elements
		this.data = {};
	}
	get(index) {
		// Search for index inside the Object and returns it
		return this.data[index];
	}
	push(item) {
		// Añade un item en la posición del valor del length, como empieza en 0, el primer item tiene la posición 0, luego el length es 1, por lo que el nuevo item va a tener la posición 1 que es el length del objeto actual
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}
	pop() {
		// Le quitamos 1 porque el array empieza en 0, y el length es 1 más que el indice siempre
		// Lo guardamos porque tenemos que retornarlo
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		// Lo regresamos para que se sepa cual fue el item que se borró
		return lastItem;
	}
	delete(index) {
		const deletedItem = this.data[index];
		this._shiftIndex(index);
		return deletedItem;
	}
	// Hace la lógica de cambiar los indices de los elementos una vez se borre uno diferente del último
	_shiftIndex(index) {
		// Empezamos a recorrer el array desde el indice y no desde 0
		for (let i = index; i < this.length - 1; i++) {
			// Lo que
			this.data[i] = this.data[i + 1];
		}
		// arriba movimos todos los elementos una posición, y aquí borramos ese indice que sobra luego de remover el elemento
		delete this.data[this.length - 1];
		this.length--;
	}
	map(callback) {
		const newArray = new MyArray();
		for (let i = 0; i < this.length; i++) {
			const match = callback(this.data[i]);
			if (match) {
				newArray.push(this.data[i]);
			}
		}
		return newArray;
	}
}
