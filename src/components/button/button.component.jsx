import iconX from '../button/components/assets/icon-x.svg';
import iconO from '../button/components/assets/icon-o.svg';

const Button = ({ icon }) => {
	return (
		<div>
			<button className=''>
				<img src={icon} alt={`${icon}-logo`}></img>
			</button>
		</div>
	);
};

export default Button;
