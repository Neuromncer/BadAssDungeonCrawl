
function Room()
{
	name:'';
	id:0;
	connections:[];
	creatures:[];
	objects:[];
	visited:false;

	
	this.generate = function(roomId)
	{
		this.connections = new Array();
		this.creatures = new Array();
		this.objects = new Array();
		this.generateName();
		this.id = roomId;
	}


	this.generateName = function()
	{
		var nameStr = '';

		if(irand(0, 100) <= 90)
		{
			nameStr += roomAdj[irand(0, roomAdj.length-1)] + ' ';
		}

		nameStr += roomTypes[irand(0, roomTypes.length - 1)] + ' of ';

		if(irand(0, 100) <= 20)
		{
			nameStr += roomAdj[irand(0, roomAdj.length-1)] + ' ';
		}

		nameStr +=  dungeonNameNouns[irand(0, dungeonNameNouns.length - 1)];

		this.name = nameStr;
	}

	this.describe = function()
	{
		var ds = '';

		ds += 'You are in <span style="color:rgb(249, 255, 0)">' + this.name + '</span>.';


		//Describe Room Connections
		ds += '<div style="padding-top:30px"><span style="color:rgb(73, 193, 255)">From this location you can move to the following locations</span>:';
		ds += '<ul>';
		
		for(var i = 0; i < this.connections.length; i++)
		{
			ds += '<li style="list-style-type: none;">(' + g_Location.rooms[this.connections[i].toString()].id + ') ' + g_Location.rooms[this.connections[i].toString()].name + '</li>';
		}

		ds += '</ul>';

		//Describe items in the room

		return ds;
	};
}