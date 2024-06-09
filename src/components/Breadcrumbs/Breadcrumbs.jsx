import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbsContainer = ({ className, items }) => {
	const location = useLocation();
	const pathNames = location.pathname.split('/').filter(path => path.match(/\D+/));

	return (
		<nav className={className}>
			<ul>
				<li>
					<Link to="/">Главная</Link>
				</li>
				{pathNames.map((item, index) => (
					<li key={index}>
						<span className="separator">{'»'}</span>
						{index < pathNames.length - 1 ? (
							<Link to={item}>{items[item]}</Link>
						) : (
							<span className="currLocation">{items[item]}</span>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export const Breadcrumbs = styled(BreadcrumbsContainer)`
	display: flex;
	align-items: center;
	margin-top: 16px;
	font-size: 16px;
	font-weight: bold;

	ul {
		list-style: none;
		display: flex;
		padding: 4px;
		margin: 0;
		background-color: #ccc;
		border-radius: 10px;
	}

	li {
		display: flex;
		align-items: center;
		overflow: hidden;

		&:hover a {
			background-color: #0056b3;
		}

		&:first-of-type {
			border-top-left-radius: 8px;
			border-bottom-left-radius: 8px;
		}

		&:last-of-type {
			border-top-right-radius: 8px;
			border-bottom-right-radius: 8px;
		}
	}

	a {
		display: inline-block;
		padding: 4px 8px;
		border-radius: 3px;
		background-color: #007bff;
		color: #fff;
		text-decoration: none;
		transition: background-color 0.2s;
	}

	.currLocation {
		display: inline-block;
		padding: 4px 8px;
		border-radius: 3px 8px 8px 3px;
		background-color: #888;
		color: #fff;
		cursor: default;
	}

	.separator {
		margin: 0 4px;
		font-size: 20px;
		color: #888;
		cursor: default;
	}
`;

BreadcrumbsContainer.propTypes = {
	className: PropTypes.string,
	items: PropTypes.object,
};
