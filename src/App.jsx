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
					<Route path="/devPage" element={<DevPage />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</Content>
			<Footer />
		</div>
	);
};

export const App = styled(AppContainer)`
	display: flex;
	flex-direction: column;
`;
