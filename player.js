

function Player ()
{
	this.name = '';
	this.age = 26;
	this.origin = '';
	this.role = '';
	this.battleCry = '';

	//Stats
	this.strength = 5;		//How hard you can swing weapons thus increasing damage and armor penetration
	this.dexterity = 5;		//How accurate you are when swinging weapons, Ability to grab objects (such as enemies throats =D)
	this.speed = 2;			//How well you can dodge attacks - may play a part in how many times you can attack before the enemy
	this.toughness = 5;		//How much abuse you can take - increases blood level, pain threshold	
	this.resistance = 5;		//How much pain and abuse you can ignore
	this.intelligence = 5; 	//Increases mana level and decreases mana use when casting spells
	this.mana = 50;

	this.currentRoom = {};
	this.backpack = {};

	//Body & Combat Related Props
	this.lefthand = {};
	this.righthand = {};
	this.body = {};
	this.blood = 300;
	this.painThreshold = 100;

	this.generate = function() 
	{
		this.age = irand(20,45);
		this.origin = CountryPrefix[irand(0, CountryPrefix.length - 1)] + CountryMid[irand(0, CountryMid.length - 1)] + CountrySuffix[irand(0, CountrySuffix.length - 1)]; 
	};

	this.save = function()
	{
		localStorage.clear('p_dat');
		localStorage.setItem('p_dat', JSON.stringify(this));
	};

	this.stats = function()
	{

	};
}