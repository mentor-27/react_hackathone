import styled from 'styled-components';

const ContentContainer = ({ className, children }) => {
	return <main className={className}>{children}</main>;
};

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	margin-block: 100px;
	background-color: #fff;
	width: 100%;
	height: 100%;
	border-radius: 12px;
`;
