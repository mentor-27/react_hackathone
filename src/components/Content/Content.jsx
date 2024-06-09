import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useMatch } from 'react-router-dom';
import { paths } from '../../consts';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentContainer = ({ className, children }) => {
	const path = useMatch('/');

	return (
		<main className={className}>
			{!path && <Breadcrumbs items={paths}></Breadcrumbs>}
			{children}
		</main>
	);
};

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	margin-block: 100px;
	padding: 0 16px 32px;
	background-color: #fff;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	overflow: hidden auto;
`;

Content.propTypes = {
	children: PropTypes.node,
};
