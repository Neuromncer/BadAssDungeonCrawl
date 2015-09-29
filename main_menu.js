
var MainMenu = 
{
	start:function()
	{
		var titleHTML = jQuery('#game-title-holder').html();
		var titleBoarder = '<div style="text-align:center; font:18px;color:#67FF00"> = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  </div>';
		var titleSubheader = '<div style="text-align:center; font:18px;color:#67FF00"> = = = = = = = = = = = = = = = = A RAND\'EM UP DUNGEON CRAWLER = = = = = = = = = = = = = = = = </div>';
		var gameOptions =  '<div style = "text-align:center; font: 20px; color:white; padding-top:40px;">[1] New Game <br/><br/> [2] Load Game </div>';
		g_GameState = 'main_menu';
		jQuery('#game-window').html(titleBoarder + '<textarea class="game-title" readonly disabled>' + titleHTML + '</textarea>' + titleSubheader + gameOptions);
		jQuery('#game-window').hide();
		jQuery('#game-window').fadeIn( 1000);
	},

	input:function(command)
	{
		if(command == '1')
		{
			NewGame.start();
		}
	}
}