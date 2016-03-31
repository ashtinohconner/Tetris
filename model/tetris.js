class Tetris {
    constructor(stage) {
        console.log("constructor for tetris");
        this.board = new PIXI.Sprite();
        this.outline = new PIXI.Graphics();
        this.board.x = 50;
        this.board.y = 50;
        this.draw_outline();
        this.board.addChild(this.outline);
        this.build_matrix(this.board);
        stage.addChild(this.board);
        this.current_piece = new Piece();
        this.draw_piece();
        document.addEventListener('keydown', this.handle_key_presses.bind(this))
    }
    handle_key_presses(key) {
        if (key.code == "ArrowDown") {
            this.current_piece.down();
            if (this.current_piece.conflict(this.board_matrix)) {
                this.current_piece.up();
                this.current_piece.fill(this.board_matrix);
                this.current_piece = new Piece();
                this.draw_piece()
            }
        }
        if (key.code == "ArrowLeft") {
            this.current_piece.left();
            if (this.current_piece.conflict(this.board_matrix)) {
                this.current_piece.right()
            }
        }
        if (key.code == "ArrowRight") {
            this.current_piece.right();
            if (this.current_piece.conflict(this.board_matrix)) {
                this.current_piece.left()
            }
        }
        this.clear_board();
        this.draw_piece()
    }
    draw_piece() {
        this.current_piece.draw(this.board_matrix)
    }
    build_matrix(container) {
        this.board_matrix = [];
        for (var i = 0; i < 10; i++) {
            this.board_matrix[i] = [];
            for (var j = 0; j < 20; j++) {
                this.board_matrix[i][j] = new Cell(container, i, j);
                this.board_matrix[i][j].visible = false
            }
        }
    }
    clear_board() {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 20; j++) {
                this.board_matrix[i][j].draw();
                if (this.board_matrix[i][j].filled) {
                    this.board_matrix[i][j].visible = true
                } else {
                    this.board_matrix[i][j].visible = false
                }
            }
        }
    }
    draw_outline() {
        this.outline.clear();
        this.outline.lineStyle(2, 0xCCCCCC);
        this.outline.beginFill();
        this.outline.drawRect(0, 0, 250, 500);
        this.outline.endFill()
    }
}