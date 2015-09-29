

var Game = {

	start:function()
	{
		//Build Town
		this.draw();

	},

	input:function(command)
	{
		//Master input for all game related actions
		var commRegex = /^(go|move)\s+.*/gi;
		var match = commRegex.exec(command.trim());

		if(match != null)
		{
			switch(match[1])
			{
				case 'GO':
				case 'MOVE':
					GameFunc.move(command);
					this.draw();
					break;
				default:
					break; 
			}
		}
		else
		{
			g_EventDisplay.draw('<span style="color:red">Invalid command...</span>');
		}
	},


	draw:function()
	{
		var windowHtml = '';
		windowHtml = g_Location.describe();

		windowHtml += g_Player.currentRoom.describe(); //Get description of current location

		//windowHtml += g_Player.currentRoom.describe();
		jQuery('#game-window').html(windowHtml);
		jQuery('#game-window').hide();
		jQuery('#game-window').fadeIn(600);
	}

}
