function fetchJson(url) {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error('Errore nella richiesta');
			}
			return response.json();
		})
		.catch(error => {
			console.error('Errore:', error);
		});
}

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=LUFgCTYOb528tTFFdoCyILmcJga0el9Gw0jhFBHQ&date=2023-12-17';
fetchJson(apiUrl)
	.then(data => {
		console.log('Dati ottenuti:', data);
		let image=document.createElement("img");
        image.src=data.hdurl;
        image.width=600;
        
        document.querySelector("#apod-container").appendChild(image);
        

	});

