class Computer {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.attempts = 0;
        this.playing = false;
    }

    update(){
        let dealerScore = document.querySelector('.dealer-score');
        dealerScore.textContent = this.score;
    }

    
}