import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = ({ className }) => {
	return (
		<div className={className}>
			<NavLink to="/" end>
				Главная
			</NavLink>
			<NavLink to="/favorites" end>
				Избранные
			</NavLink>
		</div>
	);
};

export const Navbar = styled(NavbarContainer)`
	display: flex;
	gap: 32px;

	& a:not(.active):hover::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 4px;
		inset: auto auto -4px 0;
		background-color: #eee;
	}

	& a:any-link {
		color: #000;
		text-decoration: none;
		font-size: 24px;
		font-weight: 600;
		position: relative;
	}

	& a.active:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 4px;
		inset: auto auto -4px 0;
		background-color: #000;
	}
`;
