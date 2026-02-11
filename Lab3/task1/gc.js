let obj = { big: new Array(1_000_000).fill(0) };
obj = null; // теперь объект недоступен -> может быть удалён GC