function Player () {
    var obj = {};
    
    obj.highestCompletedLevel = 0;
    obj.characters = [];
    
    obj.initPlayer = function () {
        // Check localstorage, load default if it doesn't exist
        var playerData = localStorage.getItem ("savedPlayer");
        if (playerData != null) {
            this.loadPlayer (playerData);
        } else {
            this.newPlayer ();
        }
    };
    obj.newPlayer = function () {
        this.addCharacter (0);
    };
    obj.loadPlayer = function (data) {
        
    };
    
    obj.addCharacter = function (idNum) {
        var alreadyContained = false;
        for (var i = 0; i < this.characters.length; i++) {
            if (characterData [idNum].name === this.characters [i].name) {
                alreadyContained = true;
            }
        }
        
        if (!alreadyContained) {
            this.characters.push (characterData [idNum]);
        }
    };
    
    return obj;
}