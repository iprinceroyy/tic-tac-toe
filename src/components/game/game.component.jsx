import Board from '../board/board.component';

const Game = () => {
	const squares = Array(9).fill(null);

	return (
		<div>
			<div className='game-controls'></div>

			<div>
				<Board squares={squares} />
			</div>

			<div className='scores'></div>
		</div>
	);
};

export default Game;
