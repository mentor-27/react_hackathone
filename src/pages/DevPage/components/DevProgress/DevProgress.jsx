import PropType from 'prop-types';
import { Progress } from '../../../../components';

import styled from 'styled-components';

const DevProgressContainer = ({ className, techs, progressType }) => {
	return (
		<div className={progressType === 'bar' ? `${className}` : `${className} circle`}>
			{techs.map(({ label, level }, index) => (
				<Progress
					label={label}
					percent={level}
					color="teal"
					type={progressType}
					key={index}
				/>
			))}
		</div>
	);
};

export const DevProgress = styled(DevProgressContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 30px;
	width: 100%;

	&.circle {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

DevProgressContainer.propTypes = {
	className: PropType.string.isRequired,
	techs: PropType.array.isRequired,
	progressType: PropType.string.isRequired,
};
