function handleSearch() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        var playerName = card.querySelector('.card h2').innerText.toLowerCase();
        if (playerName.includes(searchTerm)) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}