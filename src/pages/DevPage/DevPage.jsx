import styled from 'styled-components';
import { Badge, Progress, Title } from '../../components';
import { useState } from 'react';

const DevPageContainer = ({ className }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [progressType, setProgressType] = useState('bar');
	const [favorite, setFavorite] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
		progressType === 'bar' ? setProgressType('circle') : setProgressType('bar');
	};

	return (
		<div className={className}>
			<div className="devImg">
				<img
					src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="James Bond"
				/>
			</div>

			<div className="devInfo" onClick={() => setFavorite(!favorite)}>
				<div className="devStarFavorite">
					{!favorite ? (
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/ios/50/star--v1.png"
							alt="star--v1"
						/>
					) : (
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/ios-filled/50/star--v1.png"
							alt="star--v1"
						/>
					)}
				</div>

				<div className="toggle-switch">
					<input
						type="checkbox"
						id="switch"
						checked={isChecked}
						onChange={handleChange}
					/>
					<label htmlFor="switch" className="switch-label"></label>
				</div>

				<div className="devInfoTop">
					<Title level="2" size="1.5rem">
						James Bond
					</Title>
					<div className="devBadges">
						<Badge color="teal">dev</Badge>
					</div>
				</div>

				<div className="devInfoBottom">
					<span>25 лет</span>
					<p className="devAbout">
						Являюсь опытным веб-разработчиком, я специализируюсь на создании динамичных и
						отзывчивых сайтов. Мои навыки включают HTML, CSS, JavaScript, React и Node.js,
						обеспечивая высокое качество работы.
					</p>
				</div>

				<div className={progressType === 'bar' ? 'devProgress' : 'devProgress circle'}>
					<Progress label="HTML" percent={95} color="teal" type={progressType} />
					<Progress label="CSS" percent={50} color="teal" type={progressType} />
					<Progress label="JavaScript" percent={80} color="teal" type={progressType} />
					<Progress label="React" percent={70} color="teal" type={progressType} />
				</div>

				<div className="devSocial">
					<div className="devSocialItem">
						<img
							src="https://img.icons8.com/ios/50/google-logo--v1.png"
							alt="google-logo--v1"
						/>
					</div>
					<div className="devSocialItem">
						<img src="https://img.icons8.com/ios/50/github--v1.png" alt="github--v1" />
					</div>
					<div className="devSocialItem">
						<img
							src="https://img.icons8.com/ios/50/instagram-new--v1.png"
							alt="instagram-new--v1"
						/>
					</div>
				</div>

				<div className="devSliderPortfolio"></div>
			</div>
		</div>
	);
};

export const DevPage = styled(DevPageContainer)`
	display: flex;
	flex-direction: column;

	& .devImg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 250px;
		height: 250px;
		border: 5px solid #ffffff;
		border-radius: 50%;
		box-shadow: 0 0 6px #0006;
		overflow: hidden;
		margin: 20px auto;
		z-index: 1;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	& .devStarFavorite {
		position: absolute;
		left: 20px;
		top: 20px;
		cursor: pointer;
	}

	& .toggle-switch {
		position: absolute;
		right: 20px;
		top: 20px;
		display: inline-block;
		width: 60px;
		height: 34px;

		& input {
			opacity: 0;
			width: 0;
			height: 0;

			&:checked + .switch-label {
				background-color: teal;

				&::before {
					transform: translateX(26px);
				}
			}
		}

		& .switch-label {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #ccc;
			transition: 0.4s;
			border-radius: 34px;

			&::before {
				position: absolute;
				content: '';
				height: 26px;
				width: 26px;
				left: 4px;
				bottom: 4px;
				background-color: white;
				transition: 0.4s;
				border-radius: 50%;
			}
		}
	}

	& .devInfo {
		width: 100%;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #ffffff;
		border-radius: 12px;
		box-shadow: 0 0 6px #0006;
		margin: -9rem auto 0;
		padding: 9rem 0 16px;
		z-index: 0;
		font-size: 1.2rem;
		position: relative;

		& .devInfoTop {
			display: flex;
			max-width: 600px;

			& .devBadges {
				margin-top: -0.5rem;
			}
		}

		& .devInfoBottom {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			font-weight: 500;

			& .devAbout {
				margin: 0;
				padding: 0 2rem;
				text-align: center;
			}
		}

		& .devProgress {
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
		}

		& .devSocial {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			margin-top: 1rem;

			& .devSocialItem {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				box-shadow: 0 0 6px #0006;
				overflow: hidden;
				padding: 0.6rem;
				cursor: pointer;
				transition: 0.3s ease-in-out;

				& img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				&:hover {
					box-shadow: 0 0 12px #0006;
					scale: 1.1;
				}
			}
		}
	}
`;
