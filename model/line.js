/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/28/2016
*/

class Line extends Shape
{
	constructor(rotation)
	{
		super(0, red)		//......
		this.rotation = rotation	//	
		this.positions = [
				[
					[0,0,1,0],
					[0,0,1,0],
					[0,0,1,0],
					[0,0,1,0]
				],

				[
					[0,0,0,0],
					[1,1,1,1],
					[0,0,0,0],
					[0,0,0,0]
				]
			]	// 3d array of all possible positions a given shape can be in at any given time
	}
}