import { useEffect, useState } from 'react';
import { getDeveloper } from '../../requests';
import { getFavoriteDevelopersFromLocalStorage } from '../../utils';
import { DevCard } from '../../components';
import styled from 'styled-components';

const FavoritesContainer = ({ className }) => {
	const [favoritesDevelopers, setFavoritesDevelopers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const favoritesIds = getFavoriteDevelopersFromLocalStorage();

		Promise.all(
			favoritesIds.map(favoriteDeveloperId => getDeveloper(favoriteDeveloperId)),
		)
			.then(favoriteDevelopers => {
				setFavoritesDevelopers(favoriteDevelopers);
				setLoading(false);
			})
			.then(error => {
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
			{favoritesDevelopers.length > 0 ? (
				favoritesDevelopers.map(favoriteDeveloper => (
					<DevCard key={favoriteDeveloper.id} dev={favoriteDeveloper} />
				))
			) : (
				<p>Избранных разработчиков не найдено!</p>
			)}
		</div>
	);
};

export const Favorites = styled(FavoritesContainer)`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
	justify-content: center;
`;
