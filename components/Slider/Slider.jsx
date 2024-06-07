import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SampleNextArrow = props => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'gray' }}
			onClick={onClick}
		/>
	);
};

SampleNextArrow.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
};

const SamplePrevArrow = props => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'gray' }}
			onClick={onClick}
		/>
	);
};

SamplePrevArrow.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
};

const SliderContainer = ({ className, slides }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className={className}>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<div key={index} className="slide">
						{slide}
					</div>
				))}
			</Slider>
		</div>
	);
};

SliderContainer.propTypes = {
	className: PropTypes.string,
	slides: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export const StyledSlider = styled(SliderContainer)`
	.slide {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300px;
		background-color: #ccc;
		color: #333;
		font-size: 1.5rem;
	}

	.slick-prev:before,
	.slick-next:before {
		color: black;
	}
`;
