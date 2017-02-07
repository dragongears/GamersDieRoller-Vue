export default {
  Dice: Dice
}

function Dice (die, mult, mod) {
  this.die = die || 6
  this.multiplier = mult || 1
  this.modifier = mod || 0
  this.result = 1
  this.name = ''
}

Dice.prototype.roll = function () {
  this.result = 0
  for (var x = 0; x < this.multiplier; x++) {
    this.result += Math.floor(Math.random() * this.die) + 1
  }
  this.result += this.modifier
  return this.result
}

Dice.prototype.type = [2, 3, 4, 6, 8, 10, 12, 16, 20, 30, 100]
Dice.prototype.mult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
Dice.prototype.mod = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0]

Dice.prototype.modifierStr = function () {
  if (this.modifier < 0) {
    return this.modifier
  } else {
    return '+' + this.modifier
  }
}

Dice.prototype.toString = function () {
  return this.multiplier + 'd' + this.die + this.modifierStr()
}

Dice.prototype.parseStr = function (str) {
  var inp = /^([0-9]*)\D([0-9]+)([+-]+[0-9]+)*$/

  var res = str.split(inp)

  if (res.length !== 5) {
    return false
  }

  var dieval = res[2] - 0
  if (dieval < 2 || dieval > 999) {
    return false
  }

  if (res[1] === '') {
    res[1] = 1
  }
  var mulval = res[1] - 0
  if (mulval < 1 || mulval > 999) {
    return false
  }

  if (res[3] === undefined) {
    res[3] = 0
  }
  var modval = res[3] - 0
  if (modval < -999 || modval > 999) {
    return false
  }

  this.die = dieval
  this.multiplier = mulval
  this.modifier = modval
  return true
}
