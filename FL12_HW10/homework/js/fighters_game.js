function Fighter({ name, damage, hp, strength, agility }) {
  let hptotal = hp;
  let win = 0;
  let lose = 0;
  let a01 = 0.01;

  return {
    __proto__: this,
    getName: () => name,
    getDamage: () => damage,
    getStrength: () => strength,
    getAgility: () => agility,
    getHealth: () => hp,
    attack: def => {      
      let resistence =
        (def.getStrength() + def.getAgility()) * a01;
      let attack = Math.random();
      if (attack > resistence) {
        def.dealDamage(damage);
        console.log(`${name} makes ${damage} to ${def.getName()}`);
      } else {
        console.log(`${name} attack missed`);
      }
    },

    logCombatHistory: () => {
      console.log(`Name: ${name}, Wins: ${win}, Losses: ${lose}`);
    },
    heal: healScore => {
      let healthup = hp + healScore;
      hp = healthup > hptotal ? hptotal : healthup;
    },
    dealDamage: damageScore => {
      let healthdown = hp - damageScore;
      hp = healthdown < 0 ? 0 : healthdown;
    },
    addWin: () => win++,
    addLoss: () => lose++
  };
}

function battle(fighter1, fighter2) {
  let fighterDead = getDeadFighter(fighter1, fighter2);
  if (fighterDead) {
    console.log(`${fighterDead.getName()} is dead and can't fight.`);
    return;
  }
  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    [fighter1, fighter2] = [fighter2, fighter1];
  }
  let fighterWin =
  fighter1.getHealth() > fighter2.getHealth() ? fighter1 : fighter2;
  let fighterLose =
  fighter1.getHealth() < fighter2.getHealth() ? fighter1 : fighter2;
  fighterWin.addWin();
  fighterLose.addLoss();
  console.log(`${fighterWin.getName()} has won!`);

  function getDeadFighter(...fighters) {
    return fighters.find(fighter => fighter.getHealth() === 0);
  }
}