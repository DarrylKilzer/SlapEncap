function SlapService() {
  //private
  var target = new Target("Darth Vader", 100, 1, 5, 10);
  var input 

  function Target(name, health, attackOne, attackTwo, attackThree) {
    this.name = name;
    this.health = health;
    this.attacks = [
      {
        name: "Slap",
        dmg: attackOne
      },
      {
        name: "Punch",
        dmg: attackTwo
      },
      {
        name: "Kick",
        dmg: attackThree
      }
    ];
    this.status = "healthy";
  }

  //public

  this.attack = function(index) {
    var dmg = target.attacks[index].dmg;

    target.health -= dmg;
    if (target.health <= 0) {
      target.health = 0;
    }

    if (target.health < 75 && target.health > 50) {
      target.status = "hurt";
    } else if (target.health < 50 && target.health > 0) {
      target.status = "critical";
    } else if (target.health == 0) {
      target.status = "dead";
    }
  };

  this.getTarget = function() {
    var targetCopy = {
      name: target.name,
      health: target.health,
      status: target.status,
      attacks: target.attacks
    };

    return targetCopy;
  };

  this.createCharacter = function(playerInput) {
    var newTarget = new Target(playerInput.name, playerInput.health, 1, 5, 10);
    target = newTarget
    input = playerInput
    //fruitcup
  };

  this.reset = function() {
    this.createCharacter(input);
    

  }

}