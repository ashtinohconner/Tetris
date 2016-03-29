/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/28/2016
	*/

class Shape 
{
	constructor(type, color)
	{
		//this.pivot = Point(0, 0)
		this.type = type	//	type as in different type of shape(e.g. line vs l1)
		this.color = color				// ......
			// 3d array of all possible positions a given shape can be in at any given time
		// this.point0 = Point(0, 0)
		// this.point1 = Point(0, 0)
		// this.point2 = Point(0, 0)
		// this.point3 = Point(0, 0)
		// this.points[0] = this.point0
		// this.points[1] = this.point1
		// this.points[2] = this.point2
		// this.points[3] = this.point3
	}
	
	//	TODO: need to consider left edge in subclasses
	moveLeft()
	{
		if(touchingLeftEdge == true)
		{
			//.....
			return
		}
		else
		{
			this.point0.x--
			this.point1.x--
			this.point2.x--
			this.point3.x--
			return
		}
	}

	//	TODO: need to consider right edge in subclasses
	moveRight()
	{
		if(touchingRightEdge() == true)
		{
			//.....
			return
		}
		else
		{
			this.point0.x++
			this.point1.x++
			this.point2.x++
			this.point3.x++
			return
		}
	}

	//	TODO: need to consider bottom edge in subclasses
	moveDown()
	{
		if(touchingBottomEdge())
		{
			//.......
			return
		}
		else if(bottomOut())
		{
			//....
			return
		}
		else
		{
			this.point0.y++
			this.point1.y++
			this.point2.y++
			this.point3.y++
			return
		}
	}

	//	TODO: need to decide if the the only time an edge will affect a rotation is if the piece is in direct contact with it.
	rotateCounter()
	{
		if(touchingLeftEdge())
		{
			//...
			return
		}
		else if(touchingRightEdge())
		{
			//...
			return
		}
		else if(touchingBottomEdge())
		{
			//...
			return
		}
		else if(bottomOut())
		{
			//...
			return
		}
		// else no edge intrusion
		else
		{
			//...
			return
		}
	}

	//	TODO: need to decide if the the only time an edge will affect a rotation is if the piece is in direct contact with it.
	rotateClock()
	{
		if(touchingLeftEdge())
		{
			//...
			return
		}
		else if(touchingRightEdge())
		{
			//...
			return
		}
		else if(touchingBottomEdge())
		{
			//...
			return
		}
		else if(bottomOut())
		{
			//...
			return
		}
		// else no edge intrusion
		else
		{
			//...
			return
		}
	}

	touchingLeftEdge()		
	{
		for(pos_le = 0; pos_le < 3; pos_le++)
		{
			if(points[pos_le].x == 0)
			{
				return true
			}
		}

		return false
	}

	touchingRightEdge()		
	{
		for(pos_re = 0; pos_re < 3; pos_re++)
		{
			if(points[pos_re].x == 9)
			{
				return true
			}
		}

		return false
	}

	touchingBottomEdge()		
	{
		for(pos_be = 0; pos_be < 3; pos_be++)
		{
			if(points[pos_be].y == 19)
			{
				return true
			}
		}

		return false	
	}

	//	return true/false
	bottomOut()				// ??
	{}
}
