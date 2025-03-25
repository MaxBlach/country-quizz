export const getUniqueRandomNumber = (arrayLength: number, array: Array<object>) => {
    const answers: number[] = [];
    for(let i = 0; answers.length <= arrayLength; i++){
      const num = Math.floor(Math.random() * array.length)
      if (!answers.includes(num)){ 
        answers.push(num)
      }
    }
  return answers
}

export const shuffle = (array: Array<number>) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array
}