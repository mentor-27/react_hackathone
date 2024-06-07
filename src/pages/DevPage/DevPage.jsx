import styled from 'styled-components';

const DevPageContainer = ({ className }) => {
	return <div className={className}>DevPage</div>;
};

export const DevPage = styled(DevPageContainer)`
	display: flex;
	flex-direction: column;
`;
