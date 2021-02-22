/*

Fix the function `shouldRecycle` that determines if the item passed in can
or cannot be recycled.

If an item is plastic then it can be recycled and should return `Recycle Me!`
UNLESS its color is black. Black plastics should return `Currently, cannot be
recycled.`

If an item is made of aluminum or paper then it can be recycled and should
return `Recycle Me!`

*/


function shouldRecycle(item) {
  if (!item.plastic) {
    return 'Recycle Me!'
  } else if (item.color === 'black') {
    return 'Currently, cannot be recycled.'
  } else if (item.aluminum) {
    return 'Recycle Me!'
  } else if (item.paper) {
    return 'Recycle Me!'
  }
  return 'Cannot be recycled'
}


const saladContainer = { // only 2
  plastic: true, //true
  color: 'black', //false   true
  aluminum: false,//false
  paper: false //false
};

console.log(shouldRecycle(saladContainer)); // 'Currently, cannot be recycled.'

const waterBottle = { //1, 3, 4
  plastic: true, //true    true
  color: 'clear', //true
  aluminum: false, //false true
  paper: false //false     true
};

console.log(shouldRecycle(waterBottle)); // 'Recycle Me!'

const tomatoCan = { //1, 3, 4
  plastic: false,//false true
  color: 'red', //true   false
  aluminum: true,//true  true
  paper: false// false   true
};

console.log(shouldRecycle(tomatoCan)); // 'Recycle Me!'

const styrofoamContainer = {//return 0
  plastic: false, //true   false
  color: 'black', //true   false
  aluminum: false, //false false
  paper: false //false     false
};

console.log(shouldRecycle(styrofoamContainer)); // 'Cannot be recycled.'
