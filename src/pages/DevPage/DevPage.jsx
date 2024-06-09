import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import { Badge, Button, Title } from '../../components';
import { getDevelopers } from '../../api/getDevelopers';
import { selectDevs } from '../../redux/selectors';
import { getRandomColor } from '../../utils';
import { DevProgress, DevStarFavorite } from './components';

import styled from 'styled-components';

const DevPageContainer = ({ className }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [progressType, setProgressType] = useState('bar');

	const {
		params: { id },
	} = useMatch('/devPage/:id');
	const [developer, setDeveloper] = useState(
		useSelector(selectDevs).filter(dev => dev.id === id)[0],
	);

	useEffect(() => {
		if (!developer) {
			setIsLoading(true);
			getDevelopers(id)
				.then(loadedDevelopers => {
					setDeveloper(loadedDevelopers);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [id, developer]);

	const handleChange = () => {
		setIsChecked(!isChecked);
		progressType === 'bar' ? setProgressType('circle') : setProgressType('bar');
	};

	if (isLoading || !developer) {
		return <div className={className}>Загрузка...</div>;
	}

	return (
		<div className={className}>
			<div className="devImg">
				<img
					src={developer.imageUrl}
					alt={`${developer.firstName}_${developer.lastName}`}
				/>
			</div>

			<div className="devInfo">
				<DevStarFavorite id={id} />

				<div className="toggleSwitch">
					<input
						type="checkbox"
						id="switch"
						checked={isChecked}
						onChange={handleChange}
					/>
					<label htmlFor="switch" className="switchLabel"></label>
				</div>

				<div className="devInfoTop">
					<Title level="2" size="1.5rem">
						{developer.firstName} {developer.lastName}
					</Title>

					{developer.badges.map((titleBadge, index) => (
						<div className="devBadges" key={index}>
							<Badge color={() => getRandomColor()}>{titleBadge}</Badge>
						</div>
					))}
				</div>

				<div className="devInfoBottom">
					<span>{developer.age} лет</span>
					<p className="devAbout">{developer.about}</p>
				</div>

				<DevProgress techs={developer.techs} progressType={progressType} />

				{developer.contacts && (
					<div className="devSocial">
						{Object.entries(developer.contacts).map(([key, value]) => (
							<Button
								className="devSocialItem"
								key={key}
								onClick={({ target }) => console.log('target.value', target.textContent)}
							>
								{value}
							</Button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export const DevPage = styled(DevPageContainer)`
	display: flex;
	flex-direction: column;
	text-align: center;

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

	& .toggleSwitch {
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

			&:checked + .switchLabel {
				background-color: teal;

				&::before {
					transform: translateX(26px);
				}
			}
		}

		& .switchLabel {
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
				border-radius: 12px;
				box-shadow: 0 0 6px #0006;
				overflow: hidden;
				padding: 0.6rem;
				cursor: pointer;
				transition: 0.3s ease-in-out;

				&:hover {
					box-shadow: 0 0 12px #0006;
					scale: 1.1;
				}
			}
		}
	}
`;
