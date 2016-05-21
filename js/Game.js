function Game (canvas, bitSize) {
    var obj = {},
        now = Date.now ();
    
    //obj.canvas = canvas;
    //obj.context = canvas.getContext("2d");
    
    obj.toggleOptionsMenu = function () {
        document.body.classList.toggle ("optionsOpen");
    };
    obj.setOption = function (name, state) {
        localStorage.setItem(name, state);
        if (name === "captionsSetting") {
            this.toggleClosedCaptions (state);
        }
    };
    obj.toggleClosedCaptions = function (state) {
        document.body.dataset.captionsOn = state;
    };
    obj.initOptions = function (name, state) {
        var sfx = localStorage.getItem ("sfxToggle");
        
        if (localStorage.getItem ("colorBlindSetting") === "true") {
            document.getElementById ("colorBlindModeToggle").setAttribute
                ("checked", "true");
        }
        if (localStorage.getItem ("soundSetting") === "true") {
            document.getElementById ("soundToggle").setAttribute
                ("checked", "true");
        }
        if (localStorage.getItem ("sfxSetting") === "true") {
            document.getElementById ("sfxToggle").setAttribute
                ("checked", "true");
        }
        if (localStorage.getItem ("captionsSetting") === "true") {
            document.getElementById ("captionsToggle").setAttribute
                ("checked", "true");
            this.toggleClosedCaptions ("true");
        }
    };
    obj.captions = {
        "on": false,
        "container": document.getElementById ("closedCaptions"),
        "announce": function (phrase) {
            this.container.innerHTML = phrase;
        }
    };
    
    obj.currentGame = {};
    
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
        this.currentGame.level = tile.dataset.id;
        
        this.updateCharList ();
        this.setState ("charSelect");
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
        this.currentGame.char = characterData [e.dataset.id];
        this.startGame ();
    };
    obj.startGame = function () {
        console.log (game.currentGame);
        
        // make sure data checks out
        // init the level
        this.startLevel ();
        
        // start gameplay
        this.setState ("game");
    };
    
    obj.startLevel = function () {
        var boardWrapper = document.getElementById ("board"),
            timelineWrapper = document.getElementById ("timeline"),
            playerIcon = document.createElement ("div"),
            enemyIcon = document.createElement ("div");
        
        boardWrapper.innerHTML = "";
        timelineWrapper.innerHTML = "";
        
        playerIcon.setAttribute ("id", "playerIcon");
        playerIcon.classList.add ("charNode");
        timelineWrapper.appendChild (playerIcon);
        
// Add the nodes
        for (var i = 0; i < 5; i++) {
            var nodeWrapper = document.createElement ("div"),
                playerNode = document.createElement ("div"),
                enemyNode = document.createElement ("div");
            
            playerNode.classList.add ("playerTimeNode");
            nodeWrapper.appendChild (playerNode);
            enemyNode.classList.add ("enemyTimeNode");
            nodeWrapper.appendChild (enemyNode);
            nodeWrapper.classList.add ("timeNode");
            timelineWrapper.appendChild (nodeWrapper)
        }
        
        enemyIcon.setAttribute ("id", "enemyIcon");
        enemyIcon.classList.add ("charNode");
        timelineWrapper.appendChild (enemyIcon);
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