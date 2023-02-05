export const msToMinutes = (ms) => {
  return Math.floor(ms / 60000).toFixed(0);
}

export const msToSeconds = (ms) => {
  return ((ms % 60000) / 1000).toFixed(0);
}