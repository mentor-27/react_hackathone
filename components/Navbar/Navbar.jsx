import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavbarContainer = ({ className }) => {
	const [activeLink, setActiveLink] = useState('/');

	const handleLinkClick = path => {
		setActiveLink(path);
	};

	return (
		<div className={className}>
			<nav>
				<ul>
					<li>
						<Link
							to="/"
							className={activeLink === '/' ? 'active' : ''}
							onClick={() => handleLinkClick('/')}
						>
							Главная
						</Link>
					</li>
					<li>
						<Link
							to="/favorites"
							className={activeLink === '/favorites' ? 'active' : ''}
							onClick={() => handleLinkClick('/favorites')}
						>
							Избранные разработчики
						</Link>
					</li>
					<li>
						<Link
							to="/components"
							className={activeLink === '/components' ? 'active' : ''}
							onClick={() => handleLinkClick('/components')}
						>
							Примеры компонентов
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

NavbarContainer.propTypes = {
	className: PropTypes.string,
};

export const Navbar = styled(NavbarContainer)`
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 1rem 0 1rem;
	background-color: #fff;

	nav ul {
		list-style: none;
		display: flex;
		gap: 2rem;
	}

	nav ul li {
		margin: 0;
	}

	nav ul li a {
		color: #fff;
		text-decoration: none;
		font-size: 1.2rem;
		transition:
			color 0.3s,
			background-color 0.3s;
		padding: 0.5rem 1rem;
		border-radius: 5px;

		&:hover {
			background-color: #e0e0e0;
		}

		&.active {
			background-color: #f1fb61;
			color: #fff;
		}

		&:visited {
			color: grey;
		}
	}
`;
