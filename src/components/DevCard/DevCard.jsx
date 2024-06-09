import { Badge, Title } from '../';
import { getAgeSign } from '../../utils/getAgeSign';
import styled from 'styled-components';

const DevCardContainer = ({ className, dev }) => {
	const { firstName, lastName, age, about, imgageUrl, contacts } = dev || {}; // раскомментируй

	return (
		<div className={className}>
			<div className="tlDeco"></div>
			<div className="brDeco"></div>
			<div className="devImgContainer">
				<img
					className="devImg"
					src={
						// 'https://fastly.picsum.photos/id/907/110/110.jpg?hmac=gd9LnNX-aBJmu9WQUr1JbY85fzLoyr7uwgO1EdAaKUs' // imageUrl
						'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					}
					alt={`${'James'}_${'Bond'}`} // `${lastName}_${firstName}`
				/>
			</div>
			<div className="devInfoContainer">
				<Title level="3">{'James Bond'}</Title> {/* `${firstName} ${lastName}` */}
				<span>{getAgeSign('25')}</span> {/* getAgeSign(age) */}
				<div className="devBadgesContainer">
					<Badge color="tomato">teamlead</Badge>
					<Badge color="teal">dev</Badge>
				</div>
				<p className="devAbout">{'frontend-разработчик'}</p> {/* about */}
			</div>
		</div>
	);
};

export const DevCard = styled(DevCardContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 20px;
	width: 300px;
	height: 150px;
	position: relative;
	border-radius: 12px;
	box-shadow: 0 0 8px #0004;
	transition: 0.15s;
	overflow: hidden;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0 0 16px #0002;
	}

	&:active {
		transform: scale(1.015);
		box-shadow: 0 0 12px #0003;
	}

	& .tlDeco {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 40px;
		border-bottom-right-radius: 12px;
		background-color: #f2f2f2;
	}

	& .brDeco {
		position: absolute;
		bottom: 0;
		right: 0;
		height: 104px;
		width: 220px;
		border-top-left-radius: 104px;
		background-color: #f2f2f2;
	}

	& .devImgContainer {
		height: 110px;
		aspect-ratio: 1;
		overflow: hidden;
		border: 4px #fff solid;
		border-radius: 50%;
		box-shadow: 0 0 6px #0006;
		z-index: 1;
	}

	& .devImg {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: 50%;
		/* background-position: 50%; */
	}

	& .devInfoContainer {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-between;
		height: 100%;
		z-index: 1;
	}

	& .devBadgesContainer {
		display: flex;
		z-index: 1;
	}

	& .devAbout {
		margin: 0;
		text-align: right;
		font-size: 12px;
	}
`;
