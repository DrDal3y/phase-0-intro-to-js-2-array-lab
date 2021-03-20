// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat() {
    cats.push('Ralph');
}
function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
}
function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
}
function appendCat(name) {
    return [...cats, name];
}
appendCat('Broom');

function prependCat(name) {
    return [name, ...cats];
}
prependCat('Arnold');

function removeLastCat() {
    return cats.slice(0,2)
}
removeLastCat();

function removeFirstCat() {
    return cats.slice(1)
}
removeFirstCat();