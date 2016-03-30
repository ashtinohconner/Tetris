/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/28/2016
*/

class Zag2 extends Zag1
{
	constructor(rotation)
	{
		super(5, orange)		//......
		this.rotation = rotation % 2
		this.positions = [
				[
					[0,0,1],
					[0,1,1],
					[0,1,0]
				],

				[
					[1,1,0],
					[0,1,1],
					[0,0,0]
				]				
			]	// 3d array of all possible positions a given shape can be in at any given time
	}
}