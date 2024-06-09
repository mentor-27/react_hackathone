import { Route, Routes } from 'react-router-dom';
import { Header, Content, Footer } from './components';
import { DevPage, Favorites, Main } from './pages';
import styled from 'styled-components';

const AppContainer = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/devPage/:id" element={<DevPage />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/*" element={<h1>Страница не найдена</h1>} />
				</Routes>
			</Content>
			<Footer />
		</div>
	);
};

export const App = styled(AppContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: #222;
`;
