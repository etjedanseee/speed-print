import { API_URL } from "../consts";

export const fetchWords = async (wordsCount = 5, lang = 'en') => {
  const response = await fetch(API_URL + `?number=${wordsCount}&lang=${lang}`);
  const data = await response.json();
  return data
}