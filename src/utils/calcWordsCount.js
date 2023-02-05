export const calcWordsCount = (words) => {
  let count = 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
      count++
    }
  }
  return count
}