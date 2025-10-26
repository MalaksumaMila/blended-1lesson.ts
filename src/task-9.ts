// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2. Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
    items: T[];
addItem(newItem:T): void;
getItem(index: number): T;
}

const numberContainer: Container<number> = {
items: [],
addItem(newItem: number): void {
    this.items.push(newItem)
},
getItem(index): number {
return this.items[index]
},
};

const stringContainer: Container<string> = {
items: [],
addItem(newItem: string) {
    this.items.push(newItem)
},
getItem(index){
    return this.items[index]
},
};

numberContainer.addItem(12);
console.log(numberContainer.addItem(0));
stringContainer.addItem("jjjjj");
console.log(stringContainer.addItem("hhh"));

function getLastElement<T>(obj: Container<T>) {
return obj.items[obj.items.length -1]
};
console.log (getLastElement(stringContainer));