/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/28/2016
	*/
class Cell {
    constructor(container, i, j) {
        this.square = new PIXI.Graphics();
        container.addChild(this.square);
        this.square.x = i * 25;
        this.square.y = j * 25;
        this.square.mouseover = function() {
            console.log("mouse over")
        };
        this.filled = false;
        this.color = 0xffffff
    }
    draw() {
        this.square.clear();
        this.square.beginFill(this.color);
        this.square.drawRect(0, 0, 25, 25);
        this.square.endFill()
    }
    set visible(value) {
        this.square.visible = value
    }
}