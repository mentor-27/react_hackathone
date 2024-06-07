import styled from 'styled-components';

const FavoritesContainer = ({ className }) => {
	return <div className={className}>Favorites</div>;
};

export const Favorites = styled(FavoritesContainer)`
	display: flex;
	flex-direction: column;
`;
