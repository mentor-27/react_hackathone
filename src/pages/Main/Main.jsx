<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { DevCard, Slider, Title } from '../../components';
=======
import { useEffect, useState } from 'react';
import { getDevelopers } from '../../api';
import { Badge, DevCard, Title } from '../../components';
>>>>>>> feature/favorites
import styled from 'styled-components';

const images = [
	'https://e0.pxfuel.com/wallpapers/316/193/desktop-wallpaper-javascript.jpg',
	'https://picstatio.com/download/2560x1440/uhzu5z/reactJS-wallpaper.png',
	'https://remix.run/blog-images/posts/remixing-react-router/image.jpg',
];

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
<<<<<<< HEAD
			<Slider margin="0 auto 64px" images={images} width="600px" height="400px;" />
			<div className="devList">
				{new Array(10).fill('').map(item => (
					<Link key={Math.random()}>
						<DevCard /> {/* TODO */}
					</Link>
				))}
=======
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
>>>>>>> feature/favorites
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
