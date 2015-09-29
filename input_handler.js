/*****************
 * INPUT HANDLER *
 *****************/

 var InputHandler = 
 {
 	interpret:function(command)
 	{
 		//first check what the game state is
 		switch(g_GameState) {
		    case 'main_menu':
		        //Draw New Game Screen
		        MainMenu.input(command);
		        break;
		    case 'new_game':
		        NewGame.input(command);
		        break;
		    case 'game':
		    	Game.input(command);
		        break;
		    default:
		        break;
		}
 	},
 }