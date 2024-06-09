import { useEffect, useState } from 'react';
import { getDevelopers } from '../../api';
import { getFavsFromLS, removeFavFromLS } from '../../utils';
import { Badge, DevCard, Title } from '../../components';
import styled from 'styled-components';

const FavoritesContainer = ({ className }) => {
	const [favDevs, setFavoritesDevelopers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const favIds = getFavsFromLS();

		Promise.all(favIds.map(favId => getDevelopers(favId)))
			.then(favDevs => {
				setFavoritesDevelopers(favDevs);
				setLoading(false);
			})
			.catch(error => {
				setError(error);
				setLoading(false);
			});
	}, []);

	const handleRemoveFavorite = id => {
		removeFavFromLS(id);
		setFavoritesDevelopers(favDevs.filter(developer => developer.id !== id));
	};

	if (loading) {
		return <div className={className}>Загрузка...</div>;
	}

	if (error) {
		return <div className={className}>Ошибка: {error.message}</div>;
	}

	return (
		<>
			<div className={className}>
				<Title level="1" textAlign="center" margin="32px 0">
					Избранные участники разработки
					<br />
					приложения хакатона
				</Title>
				<div className="cards">
					{favDevs.length ? (
						favDevs.map(favoriteDeveloper => (
							<DevCard
								key={favoriteDeveloper.id}
								dev={favoriteDeveloper}
								onClick={() => handleRemoveFavorite(favoriteDeveloper.id)}
							/>
						))
					) : (
						<Badge color="tomato" size="24px">
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
