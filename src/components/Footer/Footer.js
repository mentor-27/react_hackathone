import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	return <div className={className}>Footer</div>;
};

export const Footer = styled(FooterContainer)`
	display: flex;
	flex-direction: column;
`;
