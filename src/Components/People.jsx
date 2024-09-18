import React, { useState, useEffect } from "react";
import axios from "axios";

function People() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataPeople, setStarWarsDataPeople] = useState();
	const [urlPeople, setUrlPeople] = useState(
		`https://swapi.py4e.com/api/people/?page=1`
	);

	useEffect(() => {
		axios.get(urlPeople).then((response) => {
			setStarWarsDataPeople(response.data);
			setLoading(false);
		});
	}, [urlPeople]);

	if (isLoading) {
		return (
			<div>
				<div>
					<h1 className="txt-shadow">Personagens</h1>
				</div>
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
		);
	}

	const allPeopleOnPage = starWarsDataPeople.results.map((people) => {
		console.log(people);

		return (
			<div className="card">
				<h2 key={people.name}>{people.name}</h2>
				<p>Gênero: {people.gender}</p>
				<p>Ano Nascimento: {people.birth_year}</p>
				<p>Altura: {people.height}</p>
				<p>Cor Cabelo: {people.hair_color}</p>
				<p>Cor pele: {people.skin_color}</p>
				<p>Cor Olhos: {people.eye_color}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1 className="txt-shadow">Personagens</h1>
			<main>{allPeopleOnPage}</main>
			<button className="btn3"
				onClick={previousPage}
				disabled={starWarsDataPeople.previous ? false : true}
			>
				Página Anterior
			</button>
			<button className="btn3"
				onClick={nextPeoplePage}
				disabled={starWarsDataPeople.next ? false : true}
			>
				Próxima Página
			</button>
		</div>
	);

	function nextPeoplePage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.previous);
	}
}

export default People;