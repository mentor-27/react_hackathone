import styled from 'styled-components';

const BadgeContainer = ({ className, children }) => {
	return <span className={className}>{children}</span>;
};

export const Badge = styled(BadgeContainer)`
	display: inline-block;
	padding: 0.25em 0.4em;
	font-size: 75%;
	font-weight: 700;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: 0.25rem;
	color: #fff;
	background-color: ${({ color }) => color || '#007bff'};
`;
