const a = { x: 1 };
const b = a; // ссылка
b.x = 99;

const c = { x: 1 };
const d = { ...c }; // копия
d.x = 77;

console.log(a.x, c.x);