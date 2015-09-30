
//This class will handle all in game functions from picking up items, equipping items, moving, etc
var GameFunc = {

	move:function(command)
	{
		var roomRegex = /^\S+\s+([0-9]+)/gi;
		var match = roomRegex.exec(command);

		if (match != null) {
			var roomId = parseInt(match[1]);
			try {
				//Check to see if the room id given is actually connected to the current room
				if (g_Player.currentRoom.connections.length > roomId - 1) {
					g_Player.currentRoom = g_Location.rooms[g_Player.currentRoom.connections[roomId - 1]];

				} else {
					g_EventDisplay.draw('<span style="color:red">You can\'t move to that location...</span>', 0);
				}
			} catch(err) {
				//Display message that room can't be found
				g_EventDisplay.draw('<span style="color:red">Error!</span>', 0);
			}

		} else {
			g_EventDisplay.draw('<span style="color:red">Where are you trying to go?</span>', 0);
		}
	},

	help:function()
	{
		g_EventDisplay.draw('The available commands are: GO, MOVE, and some hidden commands...', 0);
	},

	status:function()
	{
		return '<div>Name: ' + g_Player.name + '<br>Age: ' + g_Player.age + '<br>Toughness: ' + g_Player.toughness + '<br><br>(Press Enter to Return)</div>';
	},

	use:function(command)
	{
		var roomRegex = /^\S+\s+([0-9]+)/gi;
		var match = roomRegex.exec(command);

		if (match != null) {
			var itemId = parseInt(match[1]);
			try {
				if (g_Player.currentRoom.objects.length > itemId - 1) {
					g_EventDisplay.draw(g_Player.currentRoom.objects[itemId - 1].use());
				} else {
					g_EventDisplay.draw('<span style="color:red">What item are you trying to use?</span>', 0);
				}
			} catch(err) {
				g_EventDisplay.draw('<span style="color:red">Error!</span>', 0);
			}
		} else {
			g_EventDisplay.draw('<span style="color:red">What do you want to use?</span>', 0);
		}
	}
}
