export default function getTotalWatchTime(arr) {
  if (!arr.length) return 0;

  return Math.floor(arr.reduce((acc, current) => acc + current, 0));
}
