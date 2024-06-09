import { useEffect, useState } from 'react';
import { getDevelopers } from '../../requests';
import { Badge, DevCard, Title } from '../../components';
import styled from 'styled-components';

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
			<Title level="1" textAlign="center" margin="64px 0 16px" size="2.2rem">
				Главная страница участников
				<br />
				разработки приложения хакатона
			</Title>
			<div className="cards">
				{developers.length > 0 ? (
					developers.map(favoriteDeveloper => (
						<DevCard key={favoriteDeveloper.id} dev={favoriteDeveloper} />
					))
				) : (
					<Badge color="red" size="24px">
						Участников разработки не найдено!
					</Badge>
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
		gap: 20px;
		justify-content: center;
	}
`;
