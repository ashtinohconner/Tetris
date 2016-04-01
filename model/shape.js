/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/28/2016
	*/

class Shape 
{
	//constructor(type, color)
	constructor(type)
	{
		this.type = type	//	type as in different type of shape(e.g. line vs l1)		
	}
}

class L1 extends Shape
	{
		constructor(rotation)
		{
		super(0)		
		this.rotation = rotation % 4
	
		this.positions = [

			[	// right side up 
				[0, 0],		//	*
				[0, 1],		//	*
				[1, 2],		//	*
				[0, 2]		//	**
			],

			[	// side 2
               [1, 1],			//   *
               [2, 1],			// ***
               [2, 0],
               [0, 1]
           	],

			[	// upside down
				[0, 0],
				[1, 1],
				[1, 0],
				[1, 2]
			],

			[	// side 1
               [0, 0],
               [0, 1],
               [1, 0],
               [2, 0]
           ]
		]
	}
}

//*********

//	L2 is actually A J!!
class L2 extends L1
{
	constructor(rotation)
	{
		super(1)
		this.rotation = rotation % 4	
		
		this.positions = [
			[
          		[1, 0],
          		[1, 1],
          		[1, 2],
          		[0, 2]
          	],

          	[	
          		[0, 0],
               	[2, 1],
               	[1, 0],
               	[2, 0]
          	],

          	//	upside down
          	[
          		[0, 1],
               	[1, 0],
               	[0, 2],
               	[0, 0]
          	],

          	[
                [0, 0],
                [2, 1],
                [1, 1],
                [0, 1]
            ]
		]
	}
}

// ******* T
class Pyramid extends Shape
{
	constructor(rotation)
	{
		super(2)		//......
		this.rotation = rotation % 4

		this.positions = [
			[
				[0, 1],
               	[2, 1],
               	[1, 0],
               	[1, 1]
			],

			[
				[0, 1],
           		[1, 1],
           		[1, 0],
           		[1, 2]
			],

			[
				[0, 0],
               	[1, 1],
               	[1, 0],
               	[2, 0]
			],

			[
				[0, 1],
               	[1, 1],
               	[0, 0],
               	[0, 2] 
            ]
		]
	}
}

// *******	square
class Square extends Shape
{
	constructor()
	{
		super(3)		//......

		this.positions = [
			[
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1]
            ]
        ]    
	}
}

// ******	line
class Line extends Shape
{
	constructor(rotation)
	{
		super(4)
		this.rotation = rotation % 2

		this.positions = [
			[
                [0, 2],
                [0, 1],
                [0, 0],
                [0, 3]
            ],

            [
            	[0, 0],
            	[2, 0],
            	[1, 0],
            	[3, 0]
            ]
        ]
	}
}

//*******	zag 1
class Zag1 extends Shape
{
	constructor(rotation)
	{
		super(5)		
		this.rotation = rotation % 2
		
		this.positions = [
			[
				[0, 0],
               	[0, 1],
               	[1, 1],
               	[1, 2]
			],

			[
				[0, 1],
               	[2, 0],
               	[1, 0],
               	[1, 1]
			]
		]
	}
}

class Zag2 extends Zag1
{
	constructor(rotation)
	{
		super(6)
		this.rotation = rotation % 2

		this.positions = [
			[
				[0, 1],
               	[1, 0],
               	[1, 1],
               	[0, 2]
			],

			[
				[0, 0],
               	[2, 1],
               	[1, 0],
               	[1, 1]
			]
		]
	}
}
