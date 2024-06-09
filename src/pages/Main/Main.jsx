import { useEffect, useState } from 'react';
import { getDevelopers } from '../../api';
import { DevCard, Title } from '../../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = ({ className }) => {
	const [developers, setDevelopers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getDevelopers()
			.then(loadedDevelopers => {
				setDevelopers(loadedDevelopers);
				setLoading(false);
			})
			.catch(error => {
				setError(error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div className={className}>Загрузка...</div>;
	}

	if (error) {
		return <div className={className}>Ошибка: {error.message}</div>;
	}

	return (
		<div className={className}>
			<Title level="1" textAlign="center" margin="32px 0 32px" size="2.2rem">
				Главная страница участников
				<br />
				разработки приложения хакатона
			</Title>
			<div className="cards">
				{developers.length ? (
					developers.map(dev => (
						<Link key={dev.id} to={`devPage/${dev.id}`}>
							<DevCard key={dev.id} dev={dev} />
						</Link>
					))
				) : (
					<Title level="1">Участников разработки не найдено!</Title>
				)}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;

	& > .cards {
		display: flex;
		flex-wrap: wrap;
		gap: 48px;
		justify-content: center;
	}
`;
