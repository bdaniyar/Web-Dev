// Плохо:
const r = a => a.map(x => x * 2).filter(x => x > 10);

// Лучше:
function doubleAndKeepOver10(arr) {
  const doubled = arr.map(x => x * 2);
  return doubled.filter(x => x > 10);
}