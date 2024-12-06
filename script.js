const cards = [
    { name: 'Estiraments', img: 'estiraments.jpg' },
    { name: 'Estiraments', img: 'estiraments.jpg' },
    { name: 'Correr', img: 'correr.jpg' },
    { name: 'Correr', img: 'correr.jpg' },
    { name: 'Saltar', img: 'saltar.jpg' },
    { name: 'Saltar', img: 'saltar.jpg' },
    { name: 'Flexions', img: 'flexions.jpg' },
    { name: 'Flexions', img: 'flexions.jpg' },
    { name: 'Abdominals', img: 'abdominals.jpg' },
    { name: 'Abdominals', img: 'abdominals.jpg' },
    { name: 'Pilates', img: 'pilates.jpg' },
    { name: 'Pilates', img: 'pilates.jpg' },
    { name: 'Salta Corda', img: 'salta_corda.jpg' },
    { name: 'Salta Corda', img: 'salta_corda.jpg' },
    { name: 'Escalada', img: 'escalada.jpg' },
    { name: 'Escalada', img: 'escalada.jpg' },
    { name: 'Natació', img: 'natacio.jpg' },
    { name: 'Natació', img: 'natacio.jpg' },
    { name: 'Bici', img: 'bici.jpg' },
    { name: 'Bici', img: 'bici.jpg' },
    { name: 'Ioga', img: 'ioga.jpg' },
    { name: 'Ioga', img: 'ioga.jpg' },
    { name: 'Atletisme', img: 'atletisme.jpg' },
    { name: 'Atletisme', img: 'atletisme.jpg' },
    { name: 'Muntanya', img: 'muntanya.jpg' },
    { name: 'Muntanya', img: 'muntanya.jpg' },
    { name: 'Circuit', img: 'circuit.jpg' },
    { name: 'Circuit', img: 'circuit.jpg' }
];

// Embarallar les cartes
const shuffleCards = () => {
    return cards.sort(() => 0.5 - Math.random());
};

let flippedCards = [];
let matchedCards = 0;

const gameBoard = document.getElementById('game-board');

const renderBoard = () => {
    const shuffledCards = shuffleCards();
    gameBoard.innerHTML = '';
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-name', card.name);
        cardElement.innerHTML = `
            <img src="${card.img}" alt="${card.name}" class="card-img">
            <p class="card-name">${card.name}</p>
        `;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
};

const flipCard = (event) => {
    const card = event.target.closest('.card');

    if (flippedCards.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
};

const checkMatch = () => {
    const [card1, card2] = flippedCards;
    if (card1.getAttribute('data-name') === card2.getAttribute('data-name')) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards++;

        if (matchedCards === cards.length / 2) {
            setTimeout(() => {
                alert('Felicitat! Has guanyat!');
                resetGame();
            }, 500);
        }

        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
};

const resetGame = () => {
    matchedCards = 0;
    renderBoard();
};

renderBoard();
