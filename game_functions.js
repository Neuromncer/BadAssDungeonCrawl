
//This class will handle all in game functions from picking up items, equipping items, moving, etc

var GameFunc = {

	move:function(command)
	{
		var roomRegex = /^\w*\s+([0-9]+).*/gi;
		var match = roomRegex.exec(command);

		if(match != null)
		{
			var roomId = parseInt(match[1]);

			try {
				//Check to see if the room id given is actually connected to the current room
				if(g_Player.currentRoom.connections.indexOf(roomId) != -1)
				{
					g_Player.currentRoom = g_Location.rooms[roomId.toString()];
				}
				else 
				{
					g_EventDisplay.draw('<span style="color:red">You can\'t move to that location...</span>', 0);
				}
			} 
			catch(err) {
				//Display message that room can't be found
				g_EventDisplay.draw('<span style="color:red">You can\'t move to that location...</span>', 0);
			}
		}
	}
}
