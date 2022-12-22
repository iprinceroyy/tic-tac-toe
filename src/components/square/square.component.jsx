import './square.styles.scss';

const Square = ({ value, onClick }) => {
	return (
		<div>
			<button className='btn' onClick={onClick}>
				{value}
			</button>
		</div>
	);
};
export default Square;
