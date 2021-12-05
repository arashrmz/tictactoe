import "./App.css";
import Place from "./Components/Place";
import { useState, useReducer } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

let placesSts = ["", "", "", "", "", "", "", "", ""];
const reducer = (state, action) => {
	switch (action.type) {
		case "changeTurn":
			return {
				...state,
				turn: !state.turn,
			};
		case "setWinner":
			return {
				...state,
				winner: action.payload,
			};
		case "reset":
			return {
				winner: undefined,
				turn: true,
			};
		default:
			return state;
	}
};
const gameStatusInitState = {
	winner: undefined,
	turn: true,
};
const App = () => {
	const [places, setplaces] = useState(placesSts);
	const [status, dispatch] = useReducer(reducer, gameStatusInitState);
	const handleClick = (index) => {
		if (places[index] !== "" || status.winner !== undefined) {
			return;
		}
		let newPlaces = [...places];
		status.turn ? (newPlaces[index] = "X") : (newPlaces[index] = "O");
		setplaces([...newPlaces]);
		checkWinner(newPlaces);
		dispatch({ type: "changeTurn" });
	};
	const resetGame = () => {
		setplaces([...placesSts]);
		dispatch({ type: "reset" });
	};
	const checkWinner = (newPlaces) => {
		const places = [...newPlaces];
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			if (places[a] && places[a] === places[b] && places[a] === places[c]) {
				status.turn === true
					? dispatch({ type: "setWinner", payload: true })
					: dispatch({ type: "setWinner", payload: false });
			}
		}
		let isDraw = true;
		for (let i = 0; i < places.length; i++) {
			if (places[i] === "") {
				isDraw = false;
				break;
			}
		}
		isDraw && dispatch({ type: "setWinner", payload: "Draw" });
	};
	return (
		<Container
			className="App"
			maxWidth="100vw"
			sx={{
				width: "100vw",
				background: "white",
				minHeight: "100vh",
				paddingTop: "2rem",
				color: "black",
				fontSize: "1rem",
				fontFamily: "Permanent Marker",
			}}
		>
			<Typography
				variant="h4"
				component="h4"
				sx={{
					fontFamily: "Permanent Marker",
					display: "block",
					margin: "0 auto",
					textAlign: "center",
					paddingBottom: "2rem",
				}}
			>
				TIC TAC TOE
			</Typography>
			<Box
				className="box"
				sx={{
					width: "100%",
					maxWidth: "600px",
					margin: "0.5rem auto",
					fontSize: "5rem",
				}}
			>
				<Grid container spacing={1}>
					{places.map((item, index) => (
						<Grid item xs={4} key={index}>
							<Place index={index} handleClick={handleClick}>
								{item}
							</Place>
						</Grid>
					))}
				</Grid>
				<Box sx={{ py: "1rem" }}>
					<Typography variant="h5" component="h5">
						{status.winner === undefined && status.turn === true
							? `X Turn`
							: status.winner === undefined && status.turn === false
							? "O Turn"
							: status.winner === true
							? "X Wins"
							: status.winner === false
							? "O Wins"
							: "Draw"}
					</Typography>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => resetGame()}
					>
						Reset
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default App;
