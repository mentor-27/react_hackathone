import PropTypes from 'prop-types';
import styled from 'styled-components';

const DeveloperCardContainer = ({ className, developer, onOpen, onAddToFavorites }) => {
	const { firstName, lastName, age, photo, about } = developer;

	return (
		<div className={className}>
			<div className="photo">
				<img
					src={photo || 'https://via.placeholder.com/150'}
					alt={`${firstName} ${lastName}`}
				/>
			</div>
			<div className="info">
				<h2>{`${firstName} ${lastName}`}</h2>
				<p>Age: {age}</p>
				<p>{about}</p>
				<div className="buttons">
					<button onClick={onOpen}>Открыть</button>
					<button onClick={onAddToFavorites}>Добавить в избранное</button>
				</div>
			</div>
		</div>
	);
};

DeveloperCardContainer.propTypes = {
	className: PropTypes.string,
	developer: PropTypes.shape({
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		photo: PropTypes.string,
		about: PropTypes.string.isRequired,
	}).isRequired,
	onOpen: PropTypes.func.isRequired,
	onAddToFavorites: PropTypes.func.isRequired,
};

export const DeveloperCard = styled(DeveloperCardContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 1rem;
	width: 300px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	background-color: #fff;

	.photo img {
		border-radius: 50%;
		width: 150px;
		height: 150px;
		object-fit: cover;
	}

	.info {
		text-align: center;
		margin-top: 1rem;
	}

	.info h2 {
		margin: 0.5rem 0;
	}

	.info p {
		margin: 0.5rem 0;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.buttons button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.buttons button:hover {
		background-color: #ddd;
	}
`;
