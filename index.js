class Fighter {

	constructor(name="Fighter", power=1, health=100) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		this.health -= damage;
		console.log(`${this.name}'s health: ${this.health}`);
	}

	hit(enemy, point) {
		let damage = point * this.power;
		enemy.setDamage(damage);
	}

}

class ImprovedFighter extends Fighter {

	doubleHit(enemy, point) {
		super.hit(enemy, point*2);
	}

}

function fight(fighter, improvedFighter, ...points) {

	let winnerIs = name => { console.log(`Winner is ${name}`) }

	let isDead = fighter => { return fighter.health <=0 ? true : false }

	let isFighting = true;

	let i=0;
	
	while ( i<points.length && isFighting ) {
		switch(i % 2) {
			case 0: {
				fighter.hit(improvedFighter, points[i]);
				if (isDead(improvedFighter)) {
					winnerIs(fighter.name);
					isFighting = false;
				}
				break;
			}
			case 1: {
				improvedFighter.doubleHit(fighter, points[i]);
				if (isDead(fighter)) {
					winnerIs(improvedFighter.name);
					isFighting = false;
				}
				break;
			}
		}
		i++;
	}

	if (fighter.health>0 && improvedFighter.health>0) {
		console.log('Friendship wins');
	}
}

let fighter = new Fighter();
let improvedFighter = new ImprovedFighter("ImprovedFighter");

fight(fighter, improvedFighter, 25, 15, 20, 10, 15, 7, 13, 7, 10, 5, 10, 3, 6, 3);