import { useEffect, useState } from 'react';
import { getDevelopers } from '../../api';
import {
	addFavoriteDevelopersInLocalStorage,
	getFavoriteDevelopersFromLocalStorage,
} from '../../utils';
import { Badge, DevCard, Title } from '../../components';
import styled from 'styled-components';

const FavoritesContainer = ({ className }) => {
	const [favoritesDevelopers, setFavoritesDevelopers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// для заполнения localStorage для ПРОВЕРКИ
	for (let i = 1; i <= 3; i++) {
		addFavoriteDevelopersInLocalStorage(i);
	}

	useEffect(() => {
		const favoritesIds = getFavoriteDevelopersFromLocalStorage();

		Promise.all(
			favoritesIds.map(favoriteDeveloperId => getDevelopers(favoriteDeveloperId)),
		)
			.then(favoriteDevelopers => {
				setFavoritesDevelopers(favoriteDevelopers);
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
		<>
			<div className={className}>
				<Title level="1" textAlign="center" margin="64px 0 16px" size="2.2rem">
					Избранные участники разработки
					<br />
					приложения хакатона
				</Title>
				<div className="cards">
					{favoritesDevelopers.length > 0 ? (
						favoritesDevelopers.map(favoriteDeveloper => (
							<DevCard key={favoriteDeveloper.id} dev={favoriteDeveloper} />
						))
					) : (
						<Badge color="#007bff" size="24px">
							Избранных разработчиков не найдено!
						</Badge>
					)}
				</div>
			</div>
		</>
	);
};

export const Favorites = styled(FavoritesContainer)`
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
