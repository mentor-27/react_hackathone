import PropType from 'prop-types';
import { useState } from 'react';

import { addFavToLS, getFavsFromLS, removeFavFromLS } from '../../../../utils';

import styled from 'styled-components';

const DevStarFavoriteContainer = ({ className, id }) => {
	const [status] = getFavsFromLS().filter(fav => fav === id);
	const [favorite, setFavorite] = useState(Boolean(status) ? true : false);

	const handleClick = () => {
		!favorite ? addFavToLS(id) : removeFavFromLS(id)
		setFavorite(!favorite);
	};

	return (
		<div className={className} onClick={() => handleClick()}>
			{!favorite ? (
				<img
					width="50"
					height="50"
					src="https://img.icons8.com/ios/50/star--v1.png"
					alt="star--v1"
				/>
			) : (
				<img
					width="50"
					height="50"
					src="https://img.icons8.com/ios-filled/50/star--v1.png"
					alt="star--v1"
				/>
			)}
		</div>
	);
};

export const DevStarFavorite = styled(DevStarFavoriteContainer)`
	position: absolute;
	left: 20px;
	top: 20px;
	cursor: pointer;
`;

DevStarFavoriteContainer.propTypes = {
	className: PropType.string.isRequired,
};
