const FAVORITES_KEY = 'favoritesDevelopers';

export const getFavoriteDevelopersFromLocalStorage = () => {
	const favorites = localStorage.getItem(FAVORITES_KEY);

	return favorites ? JSON.parse(favorites) : [];
};

export const addFavoriteDevelopersInLocalStorage = id => {
	const favorites = getFavoriteDevelopersFromLocalStorage();
	if (!favorites.includes(id)) {
		favorites.push(id);
	}
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const removeFavoriteDevelopersFromLocalStorage = id => {
	let favorites = getFavoriteDevelopersFromLocalStorage();
	favorites = favorites.filter(favoritesId => favoritesId !== +id);
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
