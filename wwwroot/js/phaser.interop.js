let game;
let scene = {
    preload: preload,
    create: create,
    update: update
}

function preload() {
    console.log("preload!");
}

function create() {
    console.log("create!");
}

function update() {

}

function phaserInit(dotNetObjectRef) {
    console.log("initting...");

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: "canvas",
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    game = new Phaser.Game(config);
    dotNetObjectRef.invokeMethodAsync("OnPhaserLoaded");
}

function addPhaserSprite() {
    console.log(game.scene);
}