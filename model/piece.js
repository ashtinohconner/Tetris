class Piece {
    constructor(container, i, j) {
        if (color_index % 2 == 1) {
            this.values = [
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1]
            ]
        } else {
            this.values = [
                [0, 0],
                [0, 1],
                [1, 1],
                [1, 2]
            ]
        }
        this.i = 0;
        this.j = 0;
        this.color = color_array[color_index];
        color_index = (color_index + 1) % 3
    }
    down() {
        this.j++
    }
    up() {
        this.j--
    }
    left() {
        this.i--;
        if (this.i < 0) {
            this.i = 0
        }
    }
    right() {
        this.i++;
        if (this.i > 9) {
            this.i = 9
        }
    }
    draw(matrix) {
        for (var i = 0; i < this.values.length; i++) {
            var cell = matrix[this.i + this.values[i][0]][this.j + this.values[i][1]];
            cell.visible = true;
            cell.color = this.color;
            cell.draw()
        }
    }
    fill(matrix) {
        for (var i = 0; i < this.values.length; i++) {
            var cell = matrix[this.i + this.values[i][0]][this.j + this.values[i][1]];
            cell.visible = true;
            cell.color = this.color;
            cell.filled = true;
            cell.draw()
        }
    }
    conflict(matrix) {
        for (var i = 0; i < this.values.length; i++) {
            var i_offset = this.i + this.values[i][0];
            var j_offset = this.j + this.values[i][1];
            if (j_offset >= 20) return true;
            var cell = matrix[i_offset][j_offset];
            console.log(cell);
            if (cell.filled) return true
        }
        return false
    }
}