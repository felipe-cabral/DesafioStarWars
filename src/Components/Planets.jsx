import React, { useEffect, useState } from "react";
import axios from "axios";

function Planets() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataPlanets, setStarWarsDataPlanets] = useState();
	const [urlPlanets, setUrlPlanets] = useState(
		`https://swapi.py4e.com/api/planets/?page=1`
	);

	useEffect(() => {
		axios.get(urlPlanets).then((response) => {
			setStarWarsDataPlanets(response.data);
			setLoading(false);
		});
	}, [urlPlanets]);

	if (isLoading) {
		return (
			<div>
				<div>
					<h1 className="txt-shadow">Planetas</h1>
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

	const allPlanetsOnPage = starWarsDataPlanets.results.map((planet) => {
		console.log(planet);

		return (
			<div className="card">
				<h2 key={planet.name}>{planet.name}</h2>
				<p>Clima: {planet.climate}</p>
				<p>Terreno: {planet.terrain}</p>
				<p>População: {planet.population}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1 className="txt-shadow">Planetas</h1>
			<main>{allPlanetsOnPage}</main>
			<button className="btn3"
				onClick={previousPage}
				disabled={starWarsDataPlanets.previous ? false : true}
			>
				Página Anterior
			</button>
			<button className="btn3"
				onClick={nextPlanetPage}
				disabled={starWarsDataPlanets.next ? false : true}
			>
				Próxima Página
			</button>
		</div>
	);

	function nextPlanetPage() {
		setLoading(true);
		setUrlPlanets(starWarsDataPlanets.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlPlanets(starWarsDataPlanets.previous);
	}
}

export default Planets;