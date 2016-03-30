/* 	Mike Fleming & Austin O'Connor
 	CS 4540, Spring 2016
	Tetris
	3/29/2016
*/

class Field
{
	constructor(/*???*/)		//	this constructor assumes our "field" will be nothing more than a 10 by 20 binary array...
	{
		this.rows = [0,0,0,0,0,0,0,0,0,0]

		for(var pos_r = 0; pos_r < 10; pos_r++)
		{
			this.rows[pos_r] = [0,0,0,0,0,0,0,0,0,0]
		}
	}

	//	going along with your example of removing vowels/consonants from a C string,
	//		it might be easier when removing the bottom row(s),
	//			to make an entirely new grid....... feel me?
	removeRow()
	{
		var temp_field = [0,0,0,0,0,0,0,0,0,0]

		for(var pos_tfr = 0; pos_tfr < 10; pos_tfr++)
		{
			temp_field[pos_tfr] = [0,0,0,0,0,0,0,0,0,0]
		}	

		pos_tfr = 1	// new field will copy the 0 row from this.rows into its second([1]) row.

		for(; pos_tfr < 10; pos_tfr++)
		{
			for(var pos_tfc = 0; pos_tfc < 20; pos_tfc++)
			{
				temp_field[pos_tfr][pos_tfc] = this.rows[pos_tfr - 1][pos_tfc]
			}
		}

		this.rows = temp_field	// this assumes we are copying by value and not reference...
	}
}