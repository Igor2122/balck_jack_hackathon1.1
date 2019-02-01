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


}