class StringBuilder {
  // Приватное свойство для хранения строки
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод для получения строки
  getValue() {
    return this.#value;
  }

  // Метод для добавления строки в конец
  padEnd(str) {
    this.#value += str;
  }

  // Метод для добавления строки в начало
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для добавления строки в начало и конец
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

console.log(
  `Тема ООП оказалась трудной для быстрого понимания. Модуль 6 на 80% выполнен с помощью чата ИИ`
);
