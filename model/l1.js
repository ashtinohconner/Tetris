/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/29/2016
*/

class L1 extends Shape
{
	constructor(rotation)
	{
		super(3, green)		//......
		this.rotation = rotation	//	
		this.positions = [
				[
					[1,0,0],
					[1,0,0],
					[1,1,0]
				],

				[
					[0,0,0],
					[0,0,1],
					[1,1,1]
				],

				[
					[0,1,1],
					[0,0,1],
					[0,0,1]
				],

				[
					[1,1,1],
					[1,0,0],
					[0,0,0]
				]				
			]	// 3d array of all possible positions a given shape can be in at any given time
	}
}