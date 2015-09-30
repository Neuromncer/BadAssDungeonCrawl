
var Game = {

	start:function()
	{
		//Build Town
		this.draw();
	},

	input:function(command)
	{
		//Master input for all game related actions
		var commRegex = /^[\S]+/gi;
		var match = commRegex.exec(command.trim());

		if (match != null) {

			switch(match[0]) {
				case 'GO':
				case 'MOVE':
					GameFunc.move(command);
					this.draw();
					break;
				case 'HELP':
					GameFunc.help();
					this.draw();
					break;
				case 'STATUS':
					this.draw(GameFunc.status());
					break;
				case 'USE':
					GameFunc.use(command);
					this.draw();
					break;
				default:
					this.draw();
					g_EventDisplay.draw('<span style="color:red">Invalid command...</span>');
					break; 
			}
		} else {
			this.draw();
		}
	},

	//optional html to draw instead of describing the room
	draw:function(html)
	{
		if (html !== undefined) {
			windowHtml = html;

		} else {
			var windowHtml = '';
			windowHtml = g_Location.describe();
			//Get description of current location
			windowHtml += g_Player.currentRoom.describe();
		}

		jQuery('#game-window').html(windowHtml);
		jQuery('#game-window').hide();
		jQuery('#game-window').fadeIn(600);
	}

}
