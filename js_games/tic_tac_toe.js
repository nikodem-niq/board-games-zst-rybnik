//single 
/*
const tic_tac_toe_single = {
    first_table : [0,0,0],
    second_table : [0,0,0],
    third_table : [0,0,0],

    circle : 1,
    cross : 2,
    turn : 1,

    drawBoard : function() {
        $(".board").css({"display": "block"});
        $(".single").css({"display" : "none"});
        $(".multi").css({"display" : "none"});
        $(".reset").css({"display" : "block"});

        if(this.turn == 1) {
            this.turn = "Circle";
        }
        else if(this.turn == 2){
            this.turn = "Cross";
        }
        document.getElementById("turn").innerHTML = "Aktualna tura: "+ this.turn;
    },

    startGame : function() {
        //this.resetBoard();
        this.drawBoard();
    },

    clickOnTile : function(x) {
        if(x == 1) {this.first_table.splice(0,1,1); $("#tile1").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 2) {this.first_table.splice(1,1,1); $("#tile2").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 3) {this.first_table.splice(2,1,1); $("#tile3").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 4) {this.second_table.splice(0,1,1); $("#tile4").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 5) {this.second_table.splice(1,1,1); $("#tile5").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 6) {this.second_table.splice(2,1,1); $("#tile6").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 7) {this.third_table.splice(0,1,1); $("#tile7").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 8) {this.third_table.splice(1,1,1); $("#tile8").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 9) {this.third_table.splice(2,1,1); $("#tile9").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        //console.log(this.first_table,this.second_table,this.third_table);
        //if(this.turn == 1) {this.turn = "Circle"} else {this.turn == "Cross"}
        if(this.turn == 1) {this.turn = 2} else{this.turn = 1}
        this.checkTile();
    },

    computerTurn : function() {
        let rand_1 = Math.floor(Math.random() * 3);
        let rand_2 = Math.floor(Math.random() * 3);
        console.log(rand_1);
    },

    checkTile : function() {
        //if(!this.first_table[0] == 0) {$("#tile1").css({"cursor": "none"}); return false}

        //sprawdzenia czy wygrana dla kółka
        if(this.first_table[0] == 1 && this.first_table[1] == 1 && this.first_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.first_table[0] == 1 && this.second_table[0] == 1 && this.third_table[0] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.first_table[0] == 1 && this.second_table[1] == 1 && this.third_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.first_table[2] == 1 && this.second_table[1] == 1 && this.third_table[0] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.third_table[0] == 1 && this.third_table[1] == 1 && this.third_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.second_table[0] == 1 && this.second_table[1] == 1 && this.second_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.second_table[1] == 1 && this.first_table[1] == 1 && this.third_table[1] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.second_table[2] == 1 && this.third_table[2] == 1 && this.first_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}

        //sprawdzenia czy wygrana dla krzyzyka
        if(this.first_table[0] == 2 && this.first_table[1] == 2 && this.first_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.first_table[0] == 2 && this.second_table[0] == 2 && this.third_table[0] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.first_table[0] == 2 && this.second_table[1] == 2 && this.third_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.first_table[2] == 2 && this.second_table[1] == 2 && this.third_table[0] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.third_table[0] == 2 && this.third_table[1] == 2 && this.third_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.second_table[0] == 2 && this.second_table[1] == 2 && this.second_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.second_table[1] == 2 && this.first_table[1] == 2 && this.third_table[1] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.second_table[2] == 2 && this.third_table[2] == 2 && this.first_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
    },

    resetBoard : function() {
        this.first_table = [0,0,0];
        this.second_table = [0,0,0];
        this.third_table = [0,0,0];
        this.turn = 1;
        for(let i=1; i<=9; i++){
            $("#tile"+i).css({"background-image" : "none","cursor" : "pointer"});
        }
        location.reload();
        //test po resecie
        //console.log(this.first_table);
    }

}

*/

//multiplayer

const tic_tac_toe = {
    first_table : [0,0,0],
    second_table : [0,0,0],
    third_table : [0,0,0],

    circle : 1,
    cross : 2,
    turn : 1,

    drawBoard : function() {
        $(".board").css({"display": "block"});
        $(".single").css({"display" : "none"});
        $(".multi").css({"display" : "none"});
        $(".reset").css({"display" : "block"});

       /* if(this.turn == 1) {
            this.turn = "Circle";
        }
        else if(this.turn == 2){
            this.turn = "Cross";
        }*/
        document.getElementById("turn").innerHTML = "Aktualna tura: "+ this.turn;
    },

    startGame : function() {
        //this.resetBoard();
        this.drawBoard();
    },

    clickOnTile : function(x) {
        if(x == 1) {this.first_table.splice(0,1,this.turn); $("#tile1").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 2) {this.first_table.splice(1,1,this.turn); $("#tile2").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 3) {this.first_table.splice(2,1,this.turn); $("#tile3").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 4) {this.second_table.splice(0,1,this.turn); $("#tile4").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 5) {this.second_table.splice(1,1,this.turn); $("#tile5").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 6) {this.second_table.splice(2,1,this.turn); $("#tile6").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 7) {this.third_table.splice(0,1,this.turn); $("#tile7").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 8) {this.third_table.splice(1,1,this.turn); $("#tile8").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        else if(x == 9) {this.third_table.splice(2,1,this.turn); $("#tile9").css({"cursor": "default","pointer-events" : "none","background-image" : "url(../img/"+this.turn+".png"}); }
        console.log(this.first_table,this.second_table,this.third_table);
        //if(this.turn == 1) {this.turn = "Circle"} else {this.turn == "Cross"}
        if(this.turn == 1) {this.turn = 2} else{this.turn = 1}
        this.checkTile();
    },

    checkTile : function() {
        //if(!this.first_table[0] == 0) {$("#tile1").css({"cursor": "none"}); return false}

        //sprawdzenia czy wygrana dla kółka
        if(this.first_table[0] == 1 && this.first_table[1] == 1 && this.first_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.first_table[0] == 1 && this.second_table[0] == 1 && this.third_table[0] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.first_table[0] == 1 && this.second_table[1] == 1 && this.third_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.first_table[2] == 1 && this.second_table[1] == 1 && this.third_table[0] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.third_table[0] == 1 && this.third_table[1] == 1 && this.third_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.second_table[0] == 1 && this.second_table[1] == 1 && this.second_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.second_table[1] == 1 && this.first_table[1] == 1 && this.third_table[1] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}
        if(this.second_table[2] == 1 && this.third_table[2] == 1 && this.first_table[2] == 1) {alert("PL: Kółko wygrało! \n ENG: Circle has won!"); this.resetBoard();}

        //sprawdzenia czy wygrana dla krzyzyka
        if(this.first_table[0] == 2 && this.first_table[1] == 2 && this.first_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.first_table[0] == 2 && this.second_table[0] == 2 && this.third_table[0] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.first_table[0] == 2 && this.second_table[1] == 2 && this.third_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.first_table[2] == 2 && this.second_table[1] == 2 && this.third_table[0] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.third_table[0] == 2 && this.third_table[1] == 2 && this.third_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.second_table[0] == 2 && this.second_table[1] == 2 && this.second_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.second_table[1] == 2 && this.first_table[1] == 2 && this.third_table[1] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}
        if(this.second_table[2] == 2 && this.third_table[2] == 2 && this.first_table[2] == 2) {alert("PL: Krzyzyk wygrał \n ENG: Cross has won!"); this.resetBoard();}

    },

    resetBoard : function() {
        this.first_table = [0,0,0];
        this.second_table = [0,0,0];
        this.third_table = [0,0,0];
        this.turn = 1;
        for(let i=1; i<=9; i++){
            $("#tile"+i).css({"background-image" : "none","cursor" : "pointer"});
        }
        location.reload();
        //test po resecie
        //console.log(this.first_table);
    }

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.start').addEventListener('click', function() {
        tic_tac_toe.startGame();
    });
}); 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.single').addEventListener('click', function() {
        tic_tac_toe_single.startGame();
    });
}); 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.reset').addEventListener('click', function() {
        tic_tac_toe.resetBoard();
    });
});




//onclicks

document.getElementById("tile1").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(1);
});

document.getElementById("tile2").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(2);
});

document.getElementById("tile3").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(3);
});

document.getElementById("tile4").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(4);
});

document.getElementById("tile5").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(5);
});

document.getElementById("tile6").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(6);
});

document.getElementById("tile7").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(7);
});

document.getElementById("tile8").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(8);
});

document.getElementById("tile9").addEventListener('click', function(){
    tic_tac_toe.clickOnTile(9);
});

