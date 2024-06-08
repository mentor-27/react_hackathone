import { Title } from '../';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<div className="logoContainer">
				<Title level="1" size="1.5rem">
					Devs
					<br />
					Team
				</Title>
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 1200px;
	height: 80px;
	position: fixed;
	top: 0;
	border-radius: 0 0 12px 12px;
	background-color: #fff;

	& .logoContainer {
		display: flex;
		align-items: center;
		background-color: #ccc;
		width: fit-content;
		padding-inline: 16px;
		height: 100%;
		border-radius: 0 0 0 12px;
	}
`;
