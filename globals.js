/************************
 * => GLOBAL VARIABLES  *
 ************************/

//This specifies the current state in the game which will determine what
//logic to run when a user enters an input.
 var g_GameState = 'main_menu';
 var g_Player = new Player();
 var g_Location = new Location();
 
//Player Classes
var g_Classes = [
	{name:'Brawler', ds:'More enemies = More Pain. Gain combat boost the more enemies in a room. [+5 Toughness] [+8 Strength]'},
	{name:'Rogue', ds:'Can perform stealth kills on unaware enemies. [+10 Dexterity]'},
	{name:'Cleric', ds:'Start fully armored and a few holy spells.'},
	{name:'Bard', ds:'Get free booze at the pub. Most overpowered class in the game.'},
	{name:'Wizard', ds:'Start the game with a few spells...and your virginity'}
];

 
var g_EventDisplay = 
{
	draw:function(html, type) {
		jQuery('#event-window').hide();
		jQuery('#event-window').html(html);
		jQuery('#event-window').fadeIn(500);
		jQuery('#event-window').delay(2000).fadeOut(600);
	}
}

 function irand(min, max)
 {
 	return Math.floor(Math.random() * max) + min;
 }