const player = new Player('Igor');
const computer = new Computer('Enemy');
const card = new Card();

const game = new Game(player, computer, card);

document.addEventListener('click', e => {
    if (e.target.classList.contains('js-hit')) {
        game.playCards();
    } else if (e.target.classList.contains('js-stand')) {
        player.stand();
        // console.log('button clikck', standButton);
        game.playCards();
    }
})

