import React, { useState, Component } from "react";
import "./App.css";
import Main from "./Components/Main.jsx";
import Planets from "./Components/Planets.jsx";
import People from "./Components/People.jsx";
import Starships from "./Components/Starships.jsx";
import Search from "./Components/Search.jsx";


function App() {
	const [selectedComponent, setSelectedComponent] = useState("Main");
	return (
		<>
			<nav>
				<button className="btn btn-default" onClick={() => setSelectedComponent("Main")}>Início</button>
				<button className="btn btn-default" onClick={() => setSelectedComponent("Planets")}>Planetas</button>
				<button className="btn btn-default" onClick={() => setSelectedComponent("Starships")}>Naves</button>
				<button className="btn btn-default" onClick={() => setSelectedComponent("People")}>Personagens</button>
			</nav>
			<div id="ctn-main">
				{selectedComponent === "Main" && <Main/>}
				{selectedComponent === "Main" && <Search/>}
				{selectedComponent === "Planets" && <Planets />}
				{selectedComponent === "Starships" && <Starships />}
				{selectedComponent === "People" && <People />}
			</div>
		</>
	);
}

export default App;