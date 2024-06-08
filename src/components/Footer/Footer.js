import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	return <footer className={className}></footer>;
};

export const Footer = styled(FooterContainer)`
	display: flex;
	flex-direction: column;
	width: 1200px;
	height: 80px;
	position: fixed;
	bottom: 0;
	border-radius: 12px 12px 0 0;
	background-color: #fff;
`;
