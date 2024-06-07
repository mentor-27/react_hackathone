import styled from 'styled-components';

const ContentContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
`;
