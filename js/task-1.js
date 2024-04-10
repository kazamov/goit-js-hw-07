console.log(`Number of categories: ${document.getElementById('categories').childNodes.length}`);

const categories = document.querySelectorAll('.item');
Array.from(categories).forEach((category) => {
	console.log(`Category: ${category.querySelector('h2').textContent}`);
	console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
