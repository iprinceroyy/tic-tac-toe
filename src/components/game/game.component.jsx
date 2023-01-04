import { useReducer } from 'react';

import Board from '../board/board.component';
import './game.styles.scss';
import logo from '../../assets/logo.svg';
import iconX from '../../assets/icon-x-silver.svg';
import restart from '../../assets/icon-restart.svg';

const reducer = (state, action) => {
	switch (action) {
		case 'MOVE':
			return {
				...state,
				history: state.history.concat({ squares: action.payload.squares }),
				sIsNext: !state.xIsNext,
			};

		default:
			return state;
	}
};

const Game = () => {
	const [state, dispatch] = useReducer(reducer, {
		xIsNext: true,
		history: [{ squares: Array(9).fill(null) }],
	});

	const { xIsNext, history } = state;

	const squares = Array(9).fill(null);

	return (
		<div className='game'>
			<div className='game-controls'>
				<img src={`${logo}`} alt=''></img>
				<p>
					<img src={`${iconX}`} alt=''></img>
					<span>TURN</span>
				</p>
				<div>
					<img src={`${restart}`} alt=''></img>
				</div>
			</div>

			<Board squares={squares} />

			<div className='scores'></div>
		</div>
	);
};

export default Game;
