import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<Link to="/devPage">Разработчик</Link>
			<Link to="/favorites">Избранные</Link>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
`;
