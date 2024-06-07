import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	return <div className={className}>Modal</div>;
};

export const Modal = styled(ModalContainer)`
	display: flex;
	flex-direction: column;
`;
