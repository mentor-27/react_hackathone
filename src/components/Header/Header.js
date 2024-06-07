import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return <div className={className}>Header</div>;
};

export const Header = styled(HeaderContainer)`
	display: flex;
	flex-direction: column;
`;
