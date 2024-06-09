import { Link } from 'react-router-dom';
import { DevCard, Title } from '../../components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<Title level="1" textAlign="center" margin="64px 0" size="2.2rem">
				Главная страница участников
				<br />
				разработки приложения хакатона
			</Title>
			<div className="devList">
				{new Array(10).fill('').map(item => (
					<Link key={Math.random()}>
						<DevCard /> {/* TODO */}
					</Link>
				))}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& .devList {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 48px;
	}
`;
