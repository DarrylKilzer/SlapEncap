//Controller Responsibilities
  //user controls/interactions between data and user
  //no actual data manipulation or storage

//user control to call attack
function SlapController(){
  //private
  var slapService = new SlapService()

  function update() {
    var target = slapService.getTarget()
    var charTemplate = '';
    var buttonTemplate = '';

    var playerElem = document.getElementById('player')
    var buttonsElem = document.getElementById('buttons')
    document.body.classList.add(target.status)

    charTemplate = `
    <div class="set-width">
      <h1>${target.name}</h1>
      <img src="http://pngimg.com/uploads/darth_vader/darth_vader_PNG35.png">
      <h2>Health: ${target.health}</h2>
    </div>
    `

    for (let i = 0; i < target.attacks.length; i++) {
      let attack = target.attacks[i];
      buttonTemplate += `
      <button class="btn btn-dark" onclick="app.slapController.attack(${i})">${attack.name}</button>
      `
    }

    buttonTemplate += `
    <button class="btn btn-default" onclick="app.slapController.reset()">Reset</button>
    `

    playerElem.innerHTML = charTemplate
    buttonsElem.innerHTML = buttonTemplate
  }


  //public
  this.attack = function(index){
    slapService.attack(index)
    update()
  }

  //get player input, build data object, pass data on to service, draw new character
  this.createCharacter = function(e){
    e.preventDefault();
    var formData = e.target
    var health = formData.health.value
    var name = formData.name.value

    var playerInput = {
      name: name,
      health: health
    }

    console.log(playerInput)

    slapService.createCharacter(playerInput)
    update()
  }
  
  this.reset = function(){
    slapService.reset()
    update()
  }

}