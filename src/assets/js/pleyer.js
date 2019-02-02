class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.attempts = 0;
        this.isPlaying = true;
    }

    stand() {
        this.isPlaying = false;
    }

    update(){
        let playerScore = document.querySelector('.player-score');
        setTimeout(() => {
            playerScore.textContent = this.score;
        }, 1000);
    }


}