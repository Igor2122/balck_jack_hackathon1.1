class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.attempts = 0;
        this.isPlaying = true;
    }

    stand() {
        const standButton = document.querySelector('.js-stand');

        standButton.addEventListener('click', ()=> {
            this.isPlaying = false;
            console.log('button clikck', standButton);
        })
    }


}