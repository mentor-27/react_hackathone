import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbsContainer = ({ className, items }) => {
	return (
		<nav className={className}>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{index < items.length - 1 ? (
							<Link to={item.path}>{item.label}</Link>
						) : (
							<span>{item.label}</span>
						)}
						{index < items.length - 1 && <span className="separator">/</span>}
					</li>
				))}
			</ul>
		</nav>
	);
};

BreadcrumbsContainer.propTypes = {
	className: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export const Breadcrumbs = styled(BreadcrumbsContainer)`
	display: flex;
	align-items: center;
	font-size: 1rem;
	color: #6c757d;
	font-weight: bold;

	ul {
		list-style: none;
		display: flex;
		padding: 0;
		margin: 0;
	}

	li {
		display: flex;
		align-items: center;
	}

	a {
		color: #007bff;
		text-decoration: underline;
		transition: color 0.3s;

		&:hover {
			color: #0056b3;
		}
	}

	.separator {
		margin: 0 0.5rem;
	}
`;
