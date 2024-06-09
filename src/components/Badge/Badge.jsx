import PropTypes from 'prop-types';
import styled from 'styled-components';

const BadgeContainer = ({ className, children }) => {
	return <span className={className}>{children}</span>;
};

export const Badge = styled(BadgeContainer)`
	display: inline-block;
	padding: 2px 4px;
	width: fit-content;
	height: fit-content;
	margin: 2px;
	font-size: ${({ size }) => size || '10px'};
	font-weight: 600;
	text-align: center;
	white-space: nowrap;
	border-radius: 4px;
	color: #fefefe;
	background-color: ${({ color }) => color || '#007bff'};
`;

Badge.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
