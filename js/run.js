/*
 * Vars
 */
var game, keys,
    player;

/*
 * Declare button interactions
 */
document.getElementById ("optionsToggle").addEventListener ("click", function (e) {
    game.toggleOptionsMenu ();
});
document.getElementById ("pressKeyToStart").addEventListener ("click", function (e) {
    game.updateMap ();
    game.setState ("map");
});

document.getElementById ("colorBlindModeToggle").addEventListener ("click", function (e) {
    game.setOption ("colorBlindSetting", this.checked);
});
document.getElementById ("sfxToggle").addEventListener ("click", function (e) {
    game.setOption ("sfxSetting", this.checked);
});
document.getElementById ("soundToggle").addEventListener ("click", function (e) {
    game.setOption ("soundSetting", this.checked);
});
document.getElementById ("captionsToggle").addEventListener ("click", function (e) {
    game.setOption ("captionsSetting", this.checked);
});


/*
 * INIT Phase
 */
(function () { // INIT
    var c = document.getElementById ("gameCanvas"),
        bitSize = 5;
    
    game = new Game (c, bitSize);
    game.initOptions ();
    player = new Player ();
    player.initPlayer ();
    
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