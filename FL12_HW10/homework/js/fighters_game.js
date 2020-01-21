function Fighter({name, damage, hp, agility}) {
  let _name = name
  let _damage = damage;
  let _hp = hp;
  let _total_hp = hp;
  let _agility = agility;
  let _wins = 0;
  let _losses = 0;

  this.getName = function() {
    return _name;
  }

  this.getDamage = function() {
    return _damage;
  }

  this.getAgility = function() {
    return _agility;
  }

  this.getHealth = function() {
    return _hp;
  }

  this.isDead = function() {
    return _hp < 1
  }

  this.attack = function(fighter) {
    let hundredPercent = 100;
    if (Math.random() < (hundredPercent - fighter.getAgility()) / hundredPercent) {
      fighter.dealDamage(_damage)
      console.log(`${_name} make ${_damage} damage to ${fighter.getName()}`)
    } else {
      console.log(`${_name} attack missed`)
    }
  }

  this.logCombatHistory = function() {
    console.log(`Name: ${_name}, Wins: ${_wins}, Losses: ${_losses}`)
  }

  this.heal = function(amount) {
    let result = _hp + amount
    _hp = Math.min(result, _total_hp)
  }

  this.dealDamage = function(damageAmount) {
    if (_hp === 0) {
      return
    }
    let result = _hp - damageAmount
    _hp = Math.max(result, 0)
  }

  this.addWin = function() {
    _wins++
  }

  this.addLoss = function() {
    _losses++
  }
}

const john = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const jack = new Fighter({name: 'Jack', damage: 10, hp: 120, agility: 40});


function battle(fighter, fighter1) {
  let current_fighter = fighter
  let current_defender = fighter1
  let deadFighter = null
  if (fighter.isDead()) {
    deadFighter = fighter
  }
  if (fighter1.isDead()) {
    deadFighter = fighter1
  }
  if (deadFighter) {
    return `${deadFighter.getName()} is dead and can't fight`
  }

  while (!fighter.isDead() && !fighter1.isDead()) {
    current_fighter.attack(current_defender)

    if (current_fighter === fighter) {
      current_fighter = fighter1
      current_defender = fighter
    } else {
      current_fighter = fighter
      current_defender = fighter1
    }
  }

  if (fighter.isDead()) {
    fighter1.addWin()
    fighter.addLoss()
  } else {
    fighter.addWin()
    fighter1.addLoss()
  }
}
