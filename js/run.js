/*
 * Vars
 */
var game, keys,
    player;

/*
 * Declare button interactions
 */
document.getElementById ("pressKeyToStart").addEventListener ("click", function (e) {
    game.setState ("map");
});

/*
 * INIT Phase
 */
(function () { // INIT
    var c = document.getElementById ("gameCanvas"),
        bitSize = 5;
    
    game = new Game (c, bitSize);
    player = new Player ();
    
    window.setTimeout (function (){
        game.setState ("start");
    
        //GameLoop ();
    }, 100);
    
})();

/*
 * UPDATE Loop
 */
function GameLoop () {
    console.log (game);
    /*
    window.requestAnimationFrame(GameLoop);
    
    var now = Date.now ();
    
    if (now >= (game.frame.last + game.frame.frequency) &&
       game.paused === false) {
        // Updates
        game.frame.update ();

        //player.move (keys.current.state);

        // Execute Draws
        Draw ();
    }
    */
    //console.log (keys.current);
};

function Draw () {
    
};