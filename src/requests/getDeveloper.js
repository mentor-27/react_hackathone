import { transformDeveloper } from './utils';
import { URL } from './const';

export const getDeveloper = id => {
	return fetch(URL.DEVELOPERS + id)
		.then(rawDeveloper => rawDeveloper.json())
		.then(loadedDeveloper => transformDeveloper(loadedDeveloper) || loadedDeveloper);
};
