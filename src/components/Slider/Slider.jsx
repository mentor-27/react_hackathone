import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderContainer = ({ className, images }) => {
	const [currIndex, setCurrIndex] = useState(0);

	const onPrevClick = () => {
		setCurrIndex(prev => {
			return prev === 0 ? images.length - 1 : prev - 1;
		});
	};

	const onNextClick = () => {
		setCurrIndex(prev => {
			return prev === images.length - 1 ? 0 : prev + 1;
		});
	};

	return (
		<div className={className}>
			<button className="leftArrow" onClick={onPrevClick}>
				<div></div>
			</button>
			<button className="rightArrow" onClick={onNextClick}>
				<div></div>
			</button>
			<img className="sliderImg" src={images[currIndex]} alt="img" />
		</div>
	);
};

export const Slider = styled(SliderContainer)`
	height: 100%;
	display: flex;
	justify-content: center;
	height: ${({ height = '400px' }) => height};
	width: ${({ width = 'auto' }) => width};
	margin: ${({ margin = '0 auto' }) => margin};
	position: relative;
	box-shadow: 0 0 10px #0008;
	background-color: #222;
	border-radius: 8px;
	overflow: hidden;

	& .leftArrow,
	.rightArrow {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 15%;
		position: absolute;
		inset: 0 auto 0 0;
		border: none;
		outline: none;
		background: linear-gradient(to right, #0004, transparent);
		cursor: pointer;
	}

	& .leftArrow div,
	.rightArrow div {
		width: 25px;
		height: 25px;
		border-top: 4px solid #fff8;
		border-left: 4px solid #fff8;
		border-radius: 4px;
		filter: drop-shadow(0 0 2px #0008);
		transform: rotate(-45deg);
		transition: 0.3s;
	}

	& .leftArrow:hover div,
	.rightArrow:hover div {
		border-color: #fff;
	}

	& .rightArrow {
		inset: 0 0 0 auto;
		background: linear-gradient(to left, #0004, transparent);
	}

	& .rightArrow div {
		transform: rotate(135deg);
	}

	& .sliderImg {
		width: 100%;
		object-fit: cover;
	}
`;

Slider.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
