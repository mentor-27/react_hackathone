import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressContainer = ({ className, percent, label, color, type }) => {
	return (
		<div className={className}>
			<div>{label}</div>
			{type === 'bar' && (
				<div className="bar-container">
					<div
						className="bar"
						style={{ width: `${percent}%`, backgroundColor: color }}
					></div>
				</div>
			)}
			{type === 'circle' && (
				<div className="circle-container">
					<svg width="100" height="100" viewBox="0 0 100 100">
						<circle className="circle-bg" cx="50" cy="50" r="45" />
						<circle
							className="circle-progress"
							cx="50"
							cy="50"
							r="45"
							style={{
								strokeDasharray: 283,
								strokeDashoffset: 283 - (283 * percent) / 100,
								stroke: color,
							}}
						/>
						<text x="50" y="50" className="circle-text">{`${percent}%`}</text>
					</svg>
				</div>
			)}
		</div>
	);
};

ProgressContainer.propTypes = {
	className: PropTypes.string,
	percent: PropTypes.number.isRequired,
	label: PropTypes.string,
	color: PropTypes.string,
	type: PropTypes.string.isRequired,
};

export const Progress = styled(ProgressContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0;
	font-weight: bold;

	> div:first-child {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.bar-container {
		width: 100%;
		background-color: #e0e0e0;
		border-radius: 10px;
		overflow: hidden;
	}

	.bar {
		height: 20px;
		transition: width 0.3s ease-in-out;
	}

	.circle-container {
		position: relative;
		width: 100px;
		height: 100px;
	}

	.circle-bg {
		fill: none;
		stroke: #e0e0e0;
		stroke-width: 10;
	}

	.circle-progress {
		fill: none;
		stroke-width: 10;
		transition: stroke-dashoffset 0.3s ease-in-out;
	}

	.circle-text {
		font-size: 1rem;
		text-anchor: middle;
		dominant-baseline: middle;
	}
`;
