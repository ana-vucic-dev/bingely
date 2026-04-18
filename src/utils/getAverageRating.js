export default function getAverageRating(arr) {
  if (!arr.length) return 0;

  return arr.reduce((acc, current) => acc + current, 0) / arr.length;
}
