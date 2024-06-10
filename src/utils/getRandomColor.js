import { badgeBGs } from '../consts';

export const getRandomColor = () => badgeBGs[Math.floor(Math.random() * badgeBGs.length)];
