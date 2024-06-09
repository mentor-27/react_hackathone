import { useEffect, useState } from 'react';
import { getDevelopers } from '../../api';
import { DevCard, Slider, Title } from '../../components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDevs } from '../../redux/actions';
import { selectDevs } from '../../redux/selectors';
import { images } from '../../consts';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const dispatch = useDispatch();
	const devs = useSelector(selectDevs);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getDevelopers()
			.then(devs => {
				dispatch(setDevs(devs));
			})
			.catch(setError)
			.finally(() => setIsLoading(false));
	}, [dispatch]);

	if (isLoading) {
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
			<Slider images={images} margin="0 0 32px 0" width="800px" />
			<div className="cards">
				{devs.length ? (
					devs.map(dev => (
						<Link key={dev.id} to={`/devPage/${dev.id}`}>
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

	& .cards {
		display: flex;
		flex-wrap: wrap;
		gap: 48px;
		justify-content: center;
	}
`;
