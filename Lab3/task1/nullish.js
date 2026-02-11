let height = 0;

console.log(height || 100); // 100 (0 считается "ложью")
console.log(height ?? 100); // 0   (только null/undefined заменяются)