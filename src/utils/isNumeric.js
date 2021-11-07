export default function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}
