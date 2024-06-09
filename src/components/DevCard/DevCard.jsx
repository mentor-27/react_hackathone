import { Badge, Title } from '../';
import { getAgeSign, getRandomColor } from '../../utils';
import styled from 'styled-components';

const DevCardContainer = ({ className, dev, onClick }) => {
	const { id, firstName, lastName, age, about, imageUrl, badges } = dev;

	return (
		<div className={className} {...(onClick ? { onClick: onClick } : {})}>
			<div className="tlDeco"></div>
			<div className="brDeco"></div>
			<div className="devImgContainer">
				<img className="devImg" src={imageUrl} alt={`${lastName}_${firstName}`} />
			</div>
			<div className="devInfoContainer">
				<Title level="3" textAlign="right">{`${firstName} ${lastName}`}</Title>
				<span>{getAgeSign(`${age}`)}</span>
				{badges.length && (
					<div className="devBadgesContainer">
						{badges.map(badge => (
							<Badge key={badge} color={() => getRandomColor()}>
								{badge}
							</Badge>
						))}
					</div>
				)}
				<p className="devAbout">{about}</p>
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
		width: 110px;
		min-width: 110px;
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
