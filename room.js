
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
		this.generateObjects();
		this.id = roomId;
	}

	this.generateName = function()
	{
		var nameStr = '';

		if (irand(0, 100) <= 90) {
			nameStr += roomAdj[irand(0, roomAdj.length-1)] + ' ';
		}

		nameStr += roomTypes[irand(0, roomTypes.length - 1)] + ' of ';

		if (irand(0, 100) <= 20) {
			nameStr += roomAdj[irand(0, roomAdj.length-1)] + ' ';
		}

		nameStr +=  dungeonNameNouns[irand(0, dungeonNameNouns.length - 1)];
		this.name = nameStr;
	}

	this.generateObjects = function()
	{
		numObjects = irand(0, 4);
		for (var i = 0; i < numObjects; i++) {
			roomObject = new Entity;
			roomObject.generate();
			this.objects.push(roomObject);
		}
	}

	this.describe = function()
	{
		var ds = '';

		ds += 'You are in <span style="color:rgb(249, 255, 0)">' + this.name + '</span>.';

		//Describe Room Connections
		ds += '<div style="padding-top:30px"><span style="color:rgb(73, 193, 255)">From this location you can move to the following locations</span>:';
		ds += '<ul>';
		
		for (var i = 0; i < this.connections.length; i++) {
			ds += '<li style="list-style-type: none;">(' + (i + 1) + ') ' + g_Location.rooms[this.connections[i].toString()].name + '</li>';
		}

		ds += '</ul>';

		//Describe items in the room
		if (this.objects.length > 0) {
			ds += '<div style="padding-top:30px"><span style="color:rgb(73, 193, 255)">In this room, you see the following</span>:<ul>';
			for (var i = 0; i < this.objects.length; i++) {
				ds += '<li style="list-style-type: none;">(' + (i + 1) + ') ' + this.objects[i].describe();
			}
		}

		ds += '</ul>';

		return ds;
	};
}