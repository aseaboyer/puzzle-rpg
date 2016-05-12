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
        var mapContainer = document.getElementById ("map"),
            tiles = {};
        var maxWidth = mapContainer.offsetWidth,
            maxHeight = mapContainer.offsetHeight;
        tiles.width = (maxWidth / levelData.width);
        tiles.height = (maxHeight / levelData.height);
        mapContainer.innerHTML = "";
        
        for (var i = 0; i < levelData.levels.length; i++) {
        console.log (levelData.levels [i]);
            var mapTile = document.createElement ("div");
                mapTile.classList.add ("mapTile");
                mapTile.dataset.levelName = levelData.levels [i].name;
                mapTile.style.left = (levelData.levels [i].pos.x * tiles.width) + "px";
                mapTile.style.bottom = (levelData.levels [i].pos.y * tiles.height) + "px";
                mapTile.style.width = (tiles.width) + "px";
                mapTile.style.height = (tiles.height) + "px";
            mapContainer.appendChild (mapTile);
        }
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