/*const ships = {
    board_x : [1,2,3,4,5,6,7,8,9,10],
    board_y : ["A","B","C","D","E","F","G","H","I","J"],
    ships_x_y : ["3x1","2x1","4x3","2x1","3x1"],
    board_tiles: [],
    start_clicked : false,
    

    randomizeTiles : function() {
        let list_of_randomized_numbers = [];
        let list_of_randomized_numbers_2 = [];
        for(let x=0; x<=this.board_x.length || x<=this.board_y.length; x++){
            let rand = Math.floor(Math.random() * 10)
            list_of_randomized_numbers.push(rand)
        }
        for(let x=0; x<=this.board_x.length || x<=this.board_y.length; x++){
            let rand = Math.floor(Math.random() * 10)
            list_of_randomized_numbers_2.push(rand)
        }
        console.log(list_of_randomized_numbers);
        console.log(list_of_randomized_numbers_2);
        this.start_clicked = true;
    },


    startGame : function() {
        //console.log(this.board_x[3]);
        // Reset wszystkich zmiennych w obiekcie
        this.board_tiles = [];
        this.ships_tiles = [];

        //Funkcje wywoływane 
        if(!this.start_clicked){
            this.randomizeTiles()
        }
    },

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.start').addEventListener('click', function() {
        ships.startGame();
    });
});

*/

//passed