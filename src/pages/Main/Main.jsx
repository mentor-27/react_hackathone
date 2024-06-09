import { Link } from 'react-router-dom';
import { DevCard, Slider, Title } from '../../components';
import styled from 'styled-components';

const images = [
	'https://e0.pxfuel.com/wallpapers/316/193/desktop-wallpaper-javascript.jpg',
	'https://picstatio.com/download/2560x1440/uhzu5z/reactJS-wallpaper.png',
	'https://remix.run/blog-images/posts/remixing-react-router/image.jpg',
];

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<Title level="1" textAlign="center" margin="64px 0" size="2.2rem">
				Главная страница участников
				<br />
				разработки приложения хакатона
			</Title>
			<Slider margin="0 auto 64px" images={images} width="600px" height="400px;" />
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
