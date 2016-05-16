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
        tiles.width = (maxWidth / levelData.grid.width);
        tiles.height = (maxHeight / levelData.grid.height);
        mapContainer.innerHTML = "";
        
        for (var i = 0; i < levelData.levels.length; i++) {
            //console.log (levelData.levels [i]);
            var mapTile = document.createElement ("div");
                mapTile.classList.add ("mapTile");
                mapTile.dataset.levelName = levelData.levels [i].name;
                mapTile.dataset.id = i;
                mapTile.setAttribute ('title', levelData.levels [i].name);
                mapTile.style.left = (levelData.levels [i].pos.x * tiles.width) + "px";
                mapTile.style.bottom = (levelData.levels [i].pos.y * tiles.width) + "px";
                mapTile.style.width = (tiles.width) + "px";
                mapTile.style.height = (tiles.width) + "px";
            mapContainer.appendChild (mapTile);
            
            var tileInner = document.createElement ("div");
                tileInner.classList.add ("inner");
                tileInner.innerHTML = "L. " + i;
            mapTile.appendChild (tileInner);
            
            if (i <= player.highestCompletedLevel) {
                mapTile.classList.add ('available');
                mapTile.addEventListener ("click", function (e) {
                    game.selectLevel (this);
                });
            }
        }
    };
    obj.selectLevel = function (tile) {
        console.log (tile);
        this.currentLevel = tile.dataset.id;
        
        game.updateCharList ();
        game.setState ("charSelect");
    };
    obj.updateCharList = function () {
        console.log (player.characters);
        var charContainer = document.getElementById ("charSelect"),
            charList = document.createElement ("ul");
        
        charContainer.innerHTML = "";
        charList.classList.add ("charList");
        
        for (var i = 0; i < player.characters.length; i++) {
            var charItem = document.createElement ("li");
                charItem.classList.add ("char");
                charItem.classList.add (player.characters [i].name.toLowerCase ());
                charItem.innerHTML = "<span class='icon'>" + 
                    player.characters [i].level + "</span>" + 
                    "<div class='text'><span class='name'>" + 
                    player.characters [i].name + "</span><br>" + 
                    "<span class='stat'>Level " + 
                    player.characters [i].level + " " + 
                    player.characters [i].class + "</span></text>";
                charItem.dataset.id = i;
                charItem.dataset.name = player.characters [i].name;
            
            charItem.addEventListener ("click", function (e) {
                game.selectChar (this);
            });
            charList.appendChild (charItem);
        }
        
        charContainer.appendChild (charList);
    };
    obj.selectChar = function (e) {
        this.currentChar = e.dataset.id;
        console.log ("Selected to play: " + e.dataset.name);
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