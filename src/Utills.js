export const findSameDices = (dices, numDices) =>{
  const count = {}
  let contains = false;
  let score = 0;
  dices.forEach(die => {
      if (count[die]) {
        count[die] +=1
        return
      }
      count[die] = 1
  })
  for (let prop in count){
      if (count[prop] >= numDices){
          contains = true
      }
  }
  if(contains){
    for(let i = 0; i < dices.length; i++){
      score += dices[i]
    }
  }return score}