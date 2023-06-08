// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  // appends a cat to the end of the cats array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // prepends a cat to the beginning of the cats array
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  // removes the last cat from the cats array
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  // removes the first cat from the cats array
  cats.shift();
}

function appendCat(name) {
  // appends a cat to the cats array and returns
  // a new array, leaving the cats array unchanged
  return [...cats, name];
}

function prependCat(name) {
  // prepends a cat to the cats array and returns
  // a new array, leaving the cats array unchanged
  return [name, ...cats];
}

function removeLastCat() {
  // removes the last cat in the cats array and returns a new array,
  // leaving the cats array unchanged
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  // removes the first cat from the cats array and returns a new array,
  // leaving the cats array unchanged
  return cats.slice(1);
}
