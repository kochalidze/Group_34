const people = [{ name: 'kote', age: 10 }, { name: 'giga', age: 23 }, { name: 'daviti', age: 60 }, { name: 'cotne', age: 23 }];

function countingSort(array, maxAge) {

    const n = array.length;
    const output = new Array(n);
    const count = new Array(maxAge + 1).fill(0);

    for (let i = 0; i < n; i++) {
        count[array[i].age]++;
    }

    for (let i = 1; i <= maxAge; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const person = array[i];
        const age = person.age;
        const position = count[age] - 1;

        output[position] = person;
        count[age]--;
    }

    return output;
}

console.log(countingSort(people, 60));