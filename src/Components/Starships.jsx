import React, { useState, useEffect } from "react";
import axios from "axios";

function Starships() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataStarships, setStarWarsDataStarships] = useState();
	const [urlStarships, setUrlStarships] = useState(
		`https://swapi.py4e.com/api/starships/?page=1`
	);

	useEffect(() => {
		axios.get(urlStarships).then((response) => {
			setStarWarsDataStarships(response.data);
			setLoading(false);
		});
	}, [urlStarships]);

	if (isLoading) {
		return (
			<div>
				<div>
					<h1 className="txt-shadow">Naves</h1>
				<div className="overlay">
					Carregando...
				</div>
					<button className="btn3"
						disabled={true}
					>
						Página Anterior
					</button>
					<button className="btn3"
						disabled={true}
					>
						Próxima Página
					</button>
				</div>
			</div>
		);
	}

	const allStarshipsOnPage = starWarsDataStarships.results.map((Starship) => {
		console.log(Starship);

		return (
			<div className="card">
				<h2 key={Starship.name}>{Starship.name}</h2>
				<p>Fabricante: {Starship.manufacturer}</p>
				<p>Custo em Créditos: {Starship.cost_in_credits}</p>
				<p>Comprimento: {Starship.length}</p>
				<p>Velocidade Máxima Atmosfera: {Starship.max_atmosphering_speed}</p>
				<p>Tripulação: {Starship.crew}</p>
				<p>Passageiros: {Starship.passengers}</p>
				<p>Capacidade de Carga: {Starship.cargo_capacity}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1 className="txt-shadow">Naves</h1>
			<main>{allStarshipsOnPage}</main>
			<button className="btn3"
				onClick={previousPage}
				disabled={starWarsDataStarships.previous ? false : true}
			>
				Página Anterior
			</button>
			<button className="btn3"
				onClick={nextStarshipsPage}
				disabled={starWarsDataStarships.next ? false : true}
			>
				Próxima Página
			</button>
		</div>
	);

	function nextStarshipsPage() {
		setLoading(true);
		setUrlStarships(starWarsDataStarships.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlStarships(starWarsDataStarships.previous);
	}
}

export default Starships;