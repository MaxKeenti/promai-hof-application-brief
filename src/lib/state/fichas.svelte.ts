/**
 * Which guía docente is unfolded. Shared because the tables in section 02 link
 * into a ficha that lives further down the document: following the anchor has
 * to open it too, otherwise the reader lands on a closed row.
 */
class FichasAbiertas {
	#abiertas: Record<string, boolean> = $state({});

	esta(codigo: string) {
		return this.#abiertas[codigo] ?? false;
	}

	set(codigo: string, abierta: boolean) {
		this.#abiertas[codigo] = abierta;
	}

	abrirTodas(codigos: string[]) {
		this.#abiertas = Object.fromEntries(codigos.map((codigo) => [codigo, true]));
	}

	cerrarTodas() {
		this.#abiertas = {};
	}

	get cuantas() {
		return Object.values(this.#abiertas).filter(Boolean).length;
	}
}

export const fichasAbiertas = new FichasAbiertas();
