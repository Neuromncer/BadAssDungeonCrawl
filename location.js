

function Location()
{
	name:'';
	rooms: new Array();
	id:0;
	questDs:'';
	questObj:{};
	questRoom:0;
	questType:0;

	this.generate = function()
	{
		this.generateDungeon();
	};


	this.build = function(type)
	{
		this.rooms = new Array();

		if(type == 'town')
		{
			this.generateTown();
		}
		else if(type == 'dungeon')
		{
			this.generateDungeon();
		}
	};

	this.generateTown = function()
	{
		//Generate bar, store, quest board
		this.name = townTypeNames[irand(0, townTypeNames.length - 1)] + ' of ' + CountryPrefix[irand(0, CountryPrefix.length - 1)] + CountryMid[irand(0, CountryMid.length - 1)] + CountrySuffix[irand(0, CountrySuffix.length - 1)];
		var bar = new Room();
		var townSquare = new Room();
		var questBoard = new Room();
		
		bar.name = 'The Bar';
		bar.id = 0;
		townSquare.name = 'The Town Square';
		townSquare.id = 1;
		questBoard.name = 'The Quest Board';
		questBoard.id = 2;

		//Setup Connections
		townSquare.connections = [0,2];

		this.rooms[bar.id.toString()] = bar;
		this.rooms[townSquare.id.toString()] = townSquare;
		this.rooms[questBoard.id.toString()] = questBoard;

		g_Player.currentRoom = townSquare;

	};


	this.generateDungeon = function()
	{
		this.rooms = new Array();
		this.generateName();
		this.generateQuest();
		this.generateRooms();	
	}


	this.generateName = function()
	{
		var nameStr = '';

		if(irand(0, 100) <= 90)
		{
			nameStr += dungeonNameAdj[irand(0, dungeonNameAdj.length-1)] + ' ';
		}

		nameStr += dungeonTypeNames[irand(0, dungeonTypeNames.length - 1)] + ' of ';

		if(irand(0, 100) <= 40)
		{
			nameStr += dungeonNameAdj[irand(0, dungeonNameAdj.length-1)] + ' ';
		}

		nameStr +=  dungeonNameNouns[irand(0, dungeonNameNouns.length - 1)];

		this.name = nameStr;
	}

	this.generateRooms = function()
	{
		var numOfRooms = irand(12, 15);
		var idCount = 0;

		//First build some basic rooms
		for(var i = 0; i < numOfRooms; i++)
		{
			idCount += 1;
			room = new Room();
			room.generate(idCount);

			if(this.rooms.length > 0 )
			{
				//pick a random room from the list that has fewer than 3 connections and connect this room to it
				for(var j = this.rooms.length - 1; j > 0; j--)
				{
					if(this.rooms[j].connections.length < 3)
					{
						this.rooms[j].connections.push(room.id); //connect the rooms to each other
						room.connections.push(this.rooms[j].id); //connect the rooms to each other
						break;

					}

				}

			}

			//Pick a random number of rooms to connect to this room
			var conRoomCount = irand(1, 3);
			numOfRooms -= conRoomCount; //Subtract these from the main loop since these are being added in here.
			for(var k = 0; k < conRoomCount; k++)
			{
				idCount += 1;
				conRoom = new Room();
				conRoom.generate(idCount);
				conRoom.connections.push(room.id); //connect the rooms to each other
				room.connections.push(idCount);	   //connect the rooms to each other
				this.rooms[conRoom.id.toString()] = conRoom;
				
			}

			this.rooms[room.id.toString()] = room;
		}

	}

	this.generateQuest = function()
	{
		this.questDs = 'Slay the legendary beast, {place holder text here}. {Insert legendary beast description here. This will be a randomized back story';
	};

	this.describe = function()
	{
		var ds = '';

		ds += '<div style="text-align:center; padding-bottom:20px;"><span style="color:#67FF00"> ' + this.name + '</span> </div>';

		return ds;
	}
}