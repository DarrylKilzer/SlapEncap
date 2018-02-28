function SlapController() {
  //private
  var slapService = new SlapService()

  function update() {
    var target = slapService.getTarget()
    var template = '';
    var subTemplate = '';

    var playerElem = document.getElementById('player')
    var buttonsElem = document.getElementById('buttons')
    document.body.classList.add(target.status)

    template = `
    <div class="set-width">
      <h1>${target.name}</h1>
      <img src="http://pngimg.com/uploads/darth_vader/darth_vader_PNG35.png">
      <h2>Health: ${target.health}</h2>
    </div>
    `

    for (let i = 0; i < target.attacks.length; i++) {
      let attack = target.attacks[i];
      subTemplate += `
      <button class="btn btn-dark" onclick="app.slapController.attack(${i})">${attack.name}</button>
      `
    }

    playerElem.innerHTML = template
    buttonsElem.innerHTML = subTemplate
  }

  this.attack = function attack(index) {
    slapService.attack(index)
    update()
  }

  this.createTarget = function(e){
    e.preventDefault()
    var formData = event.target
    slapService.createTarget(formData)
    update()
  }

  // update()

}