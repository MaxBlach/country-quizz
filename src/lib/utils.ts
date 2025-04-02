export const getUniqueRandomNumber = (length: number, max:number, excludedNumbers?: number[]) => {
    const numbers: number[] = [];
    while(numbers.length < length){
      const num = Math.floor(Math.random() * max)
      if (!numbers.includes(num) && !excludedNumbers?.includes(num)){ 
        numbers.push(num)
      }
    }
  return numbers
}

export const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
};
