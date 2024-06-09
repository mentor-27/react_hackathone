import { transformDeveloper } from './transformers';
import { URL } from './consts';

export const getDevelopers = (id = '') => {
	return fetch(URL.DEVELOPERS + id)
		.then(response => {
			if (!response.ok) {
				throw new Error('Ответ от сервера не получен, статус code: ' + response.status);
			}
			return response;
		})
		.then(rawDevelopers => {
			if (!rawDevelopers) {
				throw new Error('Ответ от сервера пустой');
			}
			return rawDevelopers.json();
		})
		.then(loadedDevelopers => {
			return Array.isArray(loadedDevelopers)
				? loadedDevelopers.map(loadedDeveloper => transformDeveloper(loadedDeveloper))
				: transformDeveloper(loadedDevelopers);
		})
		.catch(error => {
			console.error('Возникла проблема с получением списка разработчиков!', error);
			throw error;
		});
};
