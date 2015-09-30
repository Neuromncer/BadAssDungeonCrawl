
var NewGame = 
{
	substate: 'name_entry',

	start:function()
	{
		g_GameState = 'new_game';
		g_Player.generate();

		jQuery('#game-window').html('<div style="text-align:center">What is your <span style="color:#67FF00">name</span> adventurer?</div>');
		jQuery('#game-window').hide();
		jQuery('#game-window').fadeIn( 1000);
	},

	input:function(command)
	{
		if (this.substate == 'name_entry') {
			g_Player.name = command;
			this.substate = 'class_selection';
			this.draw();

		} else if (this.substate == 'class_selection') {
			if(parseInt(command) >= 0 && parseInt(command) < g_Classes.length) {
				g_Player.role = g_Classes[parseInt(command)].name;
				this.substate = 'battle_cry_entry';
				this.draw();
			}

		} else if (this.substate == 'battle_cry_entry') {
			g_Player.battleCry = command;
			this.substate = 'quest';
			g_Location.generate();
			this.draw();
			//g_GameState = 'game';
			//g_Player.save();
			//Game.start();

		} else if (this.substate == 'quest') {
			g_GameState = 'game';
			g_Player.currentRoom = g_Location.rooms["1"];
			Game.start();
		}
	},

	draw:function()
	{
		var windowHtml = '';

		if (this.substate == 'class_selection') {
			windowHtml += '<div style="text-align:center; padding-bottom:10px;">Choose your <span style="color:#67FF00">class</span>:</div>';
			windowHtml += '<div style="text-align:center;"><ul>';

			for (var i = 0; i < g_Classes.length; i++) {
				windowHtml += '<li style="padding-top:10px; list-style-type: none;"><span style="color:#67FF00">[' + i + '] ' + g_Classes[i].name + '</span> - ' + g_Classes[i].ds + '</li>'; 
			}
			windowHtml += '</ul></div>';
			
		} else if (this.substate == 'battle_cry_entry') {
			windowHtml += '<div style="text-align:center">What is your <span style="color:#67FF00">battle cry</span>?</div>';

		} else if (this.substate == 'quest') {
			windowHtml += '<div style="text-align:center"><span style="color:#67FF00">= = = = = = =</span></div>';
			windowHtml += '<div style="text-align:center"><span style="color:#67FF00">=</span> Q U E S T <span style="color:#67FF00">=</span></div>'
			windowHtml += '<div style="text-align:center"><span style="color:#67FF00">= = = = = = =</span></div>';
			windowHtml += '<div style="text-align:center; padding-top: 30px;">You must enter the <span style="color:rgb(239, 255, 0);">' + g_Location.name + '</span> </div>';
			windowHtml += '<div style="text-align:center; padding-top: 60px;">Press [Enter] to delve the dungeon...</div>';
		}

		jQuery('#game-window').html(windowHtml);
		jQuery('#game-window').hide();
		jQuery('#game-window').fadeIn( 1000);
	}

}