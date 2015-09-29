

function Player ()
{
	name: '';
	age: 26;
	origin: '';
	role:'';
	battleCry:'';

	//Stats
	strength: 5;		//How hard you can swing weapons thus increasing damage and armor penetration
	dexterity:5;		//How accurate you are when swinging weapons, Ability to grab objects (such as enemies throats =D)
	speed:2;			//How well you can dodge attacks - may play a part in how many times you can attack before the enemy
	toughness:5;		//How much abuse you can take - increases blood level, pain threshold	
	resistance:5;		//How much pain and abuse you can ignore
	intelligence:5; 	//Increases mana level and decreases mana use when casting spells
	mana:50;

	currentRoom = {};
	backpack = {};

	//Body & Combat Related Props
	lefthand = {};
	righthand = {};
	body = {};
	blood:300;
	painThreshold:100;

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