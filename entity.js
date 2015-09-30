
//trying to use a short word for 'object' that's not 'object' (js keyword) or 'item'
function Entity()
{
	name = '';

	this.generate = function()
	{
		this.name = 'Altar of Manliness';
	}

	this.use = function()
	{
		g_Player.toughness += 1
		return "You offer a steak at the altar.";
	}

	this.describe = function()
	{
		return this.name;
	}
}