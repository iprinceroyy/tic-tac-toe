import './App.css';
import Game from './components/game/game.component';

const origBoard = ['o', 1, 'x', 'x', 4, 'x', 6, 'o', 'o'];

// Human
const humanPlayer = 'o';

// AI
const AIPlayer = 'x';

// Returns a list of indices of empty spots of the board
const emptyIndices = board => board.filter(s => s !== 'o' && s !== 'x');

// Winning combinations using the board indices
const winning = (board, player) => {
	if (
		(board[0] === player && board[1] === player && board[2] === player) ||
		(board[0] === player && board[4] === player && board[8] === player) ||
		(board[0] === player && board[3] === player && board[6] === player) ||
		(board[1] === player && board[4] === player && board[7] === player) ||
		(board[2] === player && board[5] === player && board[8] === player) ||
		(board[2] === player && board[4] === player && board[6] === player) ||
		(board[3] === player && board[4] === player && board[5] === player) ||
		(board[6] === player && board[7] === player && board[8] === player)
	)
		return true;
	else return false;
};

// The main minimax()
const minimax = (newBoard, player) => {
	// Available spots
	const availSpots = emptyIndices(newBoard);

	// checks for the terminal states such as win, lose, and tie
	if (winning(newBoard, humanPlayer)) return { score: -10 };
	else if (winning(newBoard, AIPlayer)) return { score: 10 };
	else if (availSpots.length === 0) return { score: 0 };

	//an array to collect all the objects
	const moves = [];

	//loop through available spots
	for (let i in availSpots) {
		// create an object for each and store the index of that spot
		const move = {};
		move.index = newBoard[i];

		//set the empty spot to the current player
		newBoard[i] = player;

		// collect the score resulted from calling minimax on the opponent of the current player

		const { score } =
			player === AIPlayer ? minimax(newBoard, humanPlayer) : minimax(newBoard, AIPlayer);

		move.score = score;

		// reset the spot to empty
		newBoard[i] = move.index;

		// push the object to the array
		moves.push(move);
	}

	let bestMove;
	if (player === AIPlayer) {
		let bestScore = -10000;
		for (let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		let bestScore = 10000;
		for (let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}
	return moves[bestMove];
};

function App() {
	return (
		<div className='App'>
			<Game />
		</div>
	);
}

export default App;
