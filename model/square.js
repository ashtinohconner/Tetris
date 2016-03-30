/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/28/2016
*/

class Square extends Shape
{
	constructor()
	{
		super(1, blue)		//......
		this.positions = [
				[
					[1,1],
					[1,1]
				]
			]	// 3d array of all possible positions a given shape can be in at any given time
	}
}