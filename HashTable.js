export default class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	hashMethod(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			// Genera un número random desde el 0 al 65.000, que hace representación al UTF-16
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	set(key, value) {
		// El hash se convierte en el address en donde guardamos el valor
		const address = this.hashMethod(key);
		// Validamos si el address ya existe, si no, generamos un nuevo array, y si existe, vamos a agregarle a ese address el value
		if (!this.data[address]) {
			this.data[address] = [];
		}
		// Evitamos que se reescriban los datos que ya estaban en ese address debido a las colisiones, solo agregamos más datos.
		this.data[address].push([key, value]);
		// Para saber que es lo que se está guardando
		return this.data;
	}
	get(key) {
		// cada hash es único por key, por lo que si le pasamos un key que ya estaba, nos regresa el hash de este
		const address = this.hashMethod(key);
		// Buscamos el indice que sería el address, y nos regresa el valor de este
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				// Corroboramos que el elemento 0 (que es el key) sea igual al key que le pasamos por parámetro a la función
				// Esto porque el hash table es un array de arrays
				if (currentBucket[i][0] === key) {
					// Le pasamos el elemento 1 ya que el 0 sería el key, y necesitamos es el value, sería algo así: [key, value]
					return currentBucket[i][1];
				}
			}
		}
		// Si no encuentra el key que le pasamos, que regrese undefined
		return undefined;
	}
}
