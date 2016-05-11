function Game (canvas, bitSize) {
    var obj = {},
        now = Date.now ();
    
    obj.canvas = canvas;
    obj.context = canvas.getContext("2d");
    
    obj.toggleOptionsMenu = function () {
        document.body.classList.toggle ("optionsOpen");
    };
    
    obj.state = "start";
    obj.setState = function (stateName) {
        this.state = stateName;
        document.body.dataset.activeScene = stateName;
    };
    obj.updateMap = function () {
        var mapContainer = document.getElementById ("map");
        console.log (mapContainer)
    };
    
    /*
    obj.paused = false;
    
    obj.frame = {};
    obj.frame.frequency = 100;
    obj.frame.last = now;
    obj.frame.update = function () {
        this.last = Date.now ();
    };
    */
    
    
    return obj;
}