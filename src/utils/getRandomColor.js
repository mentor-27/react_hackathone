import { badgeBGs } from '../consts';

export const getRandomColor = () =>
	badgeBGs[Math.round(Math.random() * badgeBGs.length - 1)];
