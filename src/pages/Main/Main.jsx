import { Link } from 'react-router-dom';
import { Title } from '../../components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<Title level="1" textAlign="center" margin="64px 0 16px" size="2.2rem">
				Главная страница участников
				<br />
				разработки приложения хакатона
			</Title>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
`;
