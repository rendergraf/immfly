import React, { useState, useMemo } from "react";
import GridPokemon from "../GridPokemon";

// eslint-disable-next-line react/prop-types
function SearchPokemon({ setIsSearch }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setError("");
		setResults([]);
		fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				setResults([data]);
				setError("");
				setIsSearch(true);
			})
			.catch(() => {
				setError(`Oops, no found "${searchTerm}" Pokemon`);
				setIsSearch(false);
			});
	};

	const searchResult = useMemo(() => {
		if (error) {
			return (
				<div className="error-detail">
					<p>{error}</p>
				</div>
			);
		}
		if (results.length === 0) {
			return null;
		}
		return (
			<div className="result-section">
				{results.map((item, i) => (
					<GridPokemon item={item} key={i} />
				))}
			</div>
		);
	}, [error, results]);

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="form-search"
				data-testid="search-form"
			>
				<input
					type="text"
					placeholder="Search Pokemon"
					value={searchTerm}
					onChange={handleChange}
				/>
				<button type="submit" disabled={!searchTerm}>
					Search
				</button>
			</form>
			{searchResult}
		</>
	);
}

export default SearchPokemon;
