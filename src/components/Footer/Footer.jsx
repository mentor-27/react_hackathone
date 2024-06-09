import { useEffect, useState } from 'react';
import { Title, Weather } from '../';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Sochi&units=metric&lang=ru&appid=1dc6d9a7f2a75e8ccc4a15b83b0fefc3',
		)
			.then(resp => resp.json())
			.then(data => setWeatherData(data))
			.catch(error => console.warn(error.message));
	}, []);

	return (
		<footer className={className}>
			<Title className="teamSign" level="2">
				Result School Hackathone Team #3
			</Title>
			{weatherData.cod === 200 ? <Weather data={weatherData} /> : <i></i>}
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1200px;
	width: 100%;
	height: 80px;
	position: fixed;
	bottom: 0;
	border-radius: 12px 12px 0 0;
	background-color: #fff;
	overflow: hidden;

	& .teamSign {
		margin-left: 16px;
	}
`;
