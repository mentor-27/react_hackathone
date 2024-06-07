import styled from 'styled-components';

const ButtonContainer = ({ className, onClick, children }) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	padding: 0.5rem 1rem;
	margin: ${({ margin }) => margin || '0'};
	font-size: 1rem;
	color: #fff;
	background-color: ${({ color }) => color || '#007bff'};
	border: none;
	border-radius: ${({ rounded }) => (rounded ? '5px' : '0')};
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${({ hoverColor }) => hoverColor || '#0056b3'};
	}

	&:active {
		background-color: ${({ activeColor }) => activeColor || '#004085'};
	}

	&:disabled {
		background-color: #6c757d;
		cursor: not-allowed;
	}
`;
