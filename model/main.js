"use strict";
var color_array = [0xff0000, 0x00ff00, 0x0000ff];
var color_index = 0;

var stage;
var renderer;

function doit() {
    $("body").append("hello")
}

function after_load() {
    stage = new PIXI.Container();
    stage.interactive = true;
    renderer = PIXI.autoDetectRenderer(500, 1000, null);
    document.body.appendChild(renderer.view);
    requestAnimationFrame(animate);
    new Tetris(stage)
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage)
}
after_load();