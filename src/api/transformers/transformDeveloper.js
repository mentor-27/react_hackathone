export const transformDeveloper = ({
	id,
	first_name,
	last_name,
	age,
	about,
	image_url,
	contacts,
}) => ({
	id,
	firstName: first_name,
	lastName: last_name,
	age,
	about,
	imageUrl: image_url,
	contacts: contacts
		? {
				phone: contacts.phone,
				email: contacts.email,
			}
		: contacts,
});
