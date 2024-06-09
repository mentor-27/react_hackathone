import { LS_KEY } from '../consts';

export const getFavsFromLS = () => {
	const favorites = localStorage.getItem(LS_KEY);

	return favorites ? JSON.parse(favorites) : [];
};

export const addFavToLS = id => {
	const favorites = getFavsFromLS();
	if (!favorites.includes(id)) {
		favorites.push(id);
	}
	localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

export const removeFavFromLS = id => {
	let favorites = getFavsFromLS();
	favorites = favorites.filter(favoritesId => favoritesId !== id);
	localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};
