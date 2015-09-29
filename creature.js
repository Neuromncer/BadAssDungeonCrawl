
var creatureList = [
	{
		type:'Goblin',
		strength:5,
		dexterity:5,
		toughness:5,
		speed:8,
		bodyType:'humanoid'
	},
	{
		type:'Thief',
		strength:5,
		dexterity:12,
		toughness:3,
		speed:10,
		bodyType:'humanoid'
	}
];

function creature() {
	
	name: '';
	age: 26;
	inventory: [];
	gold:0;
	lefthand: {};
	righthand: {};
	body: {};

	//Stat Props
	strength:5;
	dexterity:5;
	toughness:5;
	resistence:5;
	speed:5;

	//Combat Props
	blood:100;
	painThreshold:100;
}