class Quiz{
    constructor(){




}
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
})
}

update(state){
    database.ref('/').update({
      gameState: state
});
}


async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
}
    question = new Question();
    question.display();
}
}

play(){
    this.input.hide();
    this.title.hide();
    this.button.hide();

    background("yellow");
    textSize("h2");
    text("Contestant who answered correctly are highlighted in green");
    Quiz.getContestantInfo();

    for(var plr in allcontestants){
        var correctAns="2";
        if(correctAns === allcontestants[plr].answer){
            fill("green");
}
else
    fill("red");
}
}
}

