export const getAgeSign = age => {
	let solvedAge;
	if (age.endsWith('1')) solvedAge = `${age} год`;
	if (['2', '3', '4'].some(num => age.endsWith(num))) solvedAge = `${age} года`;
	if (
		(+age > 9 && +age < 15) ||
		['5', '6', '7', '8', '9', '0'].some(num => age.endsWith(num))
	)
		solvedAge = `${age} лет`;
	return solvedAge;
};
