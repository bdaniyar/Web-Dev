const money = {
  amount: 10,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? `KZT ${this.amount}` : this.amount;
  }
};

console.log(String(money)); // "KZT 10"
console.log(money + 5);     // 15