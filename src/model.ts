const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const books = [
	{
		title: 'Psychology 101',
		author: 'George Anton'
	},
	{
		title: '1984',
		author: 'George Orwell'
	}
];

export const getTechBooks = (language = null) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			(async () => {
				const response = await fetch(techBooksUrl);
				const techBooks = await response.json();
				if (language !== null) {
					resolve(techBooks.filter((m:any) => m.language === 'french'));
				} else {
					resolve(techBooks);
				}
			})();
		}, 1000);
	});
};