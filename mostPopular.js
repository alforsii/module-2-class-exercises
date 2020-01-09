//1. Find the most popular actor from an array
// Input: an array of object, where each element contains the property "popularityScore"
// Output: A string that represents the name of the most popular actor
function mostPopularActor(actors) {
  let score = actors[0].popularityScore;
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].popularityScore > score) score = actors[i].popularityScore;
  }
  let mostPop = actors.filter(actor => actor.popularityScore === score);
  return mostPop[0].name;
}

var americanActors = [
  { name: 'Tom Hanks', popularityScore: 87 },
  { name: 'Natalie Portman', popularityScore: 90 },
  { name: 'Jack Nicholson', popularityScore: 98 },
  { name: 'Julia Roberts', popularityScore: 88 },
];
console.log(mostPopularActor(americanActors)); // => "Jack Nicholson"

//2.
// From the array of given trash, make sure every item goes into the right bin.
// If an item happens to be dirty, it should go to the generic bin, regardless of material.
// At the very end, this should be your solution:

// { blue:
//    [ 'Cardboard',
//      'Newspaper',
//      'Magazine',
//      'Beer Bottle',
//      'Cereal Box' ],
//   yellow:
//    [ 'Coke Can',
//      'Plastic Bag',
//      'Detergent Container',
//      'Sausage Can',
//      'Milk Carton',
//      'Juice Pack',
//      'Water Bottle' ],
//   green: [ 'Wine Bottle', 'Pickle Jar', 'Beer Bottle' ],
//   black:
//    [ 'Pizza Box',
//      'Moldy Food',
//      'Tree Leaves',
//      'Tuna Can',
//      'Cut Grass' ]
// }

const trash = [
  { name: 'Pizza Box', material: 'paper', dirty: true },
  { name: 'Coke Can', material: 'metal', dirty: false },
  { name: 'Plastic Bag', material: 'plastic', dirty: false },
  { name: 'Moldy Food', material: 'generic', dirty: true },
  { name: 'Cardboard', material: 'paper', dirty: false },
  { name: 'Detergent Container', material: 'plastic', dirty: false },
  { name: 'Wine Bottle', material: 'glass', dirty: false },
  { name: 'Pickle Jar', material: 'glass', dirty: false },
  { name: 'Newspaper', material: 'paper', dirty: false },
  { name: 'Magazine', material: 'paper', dirty: false },
  { name: 'Tree Leaves', material: 'generic', dirty: false },
  { name: 'Beer Bottle', material: 'glass', dirty: false },
  { name: 'Beer Bottle', material: 'paper', dirty: false },
  { name: 'Tuna Can', material: 'metal', dirty: true },
  { name: 'Sausage Can', material: 'metal', dirty: false },
  { name: 'Milk Carton', material: 'plastic', dirty: false },
  { name: 'Cereal Box', material: 'paper', dirty: false },
  { name: 'Juice Pack', material: 'plastic', dirty: false },
  { name: 'Cut Grass', material: 'generic', dirty: false },
  { name: 'Water Bottle', material: 'plastic', dirty: false },
];

//   Here is the color map you should follow when selecting items that should go in the specific bins.

const binColorMap = {
  paper: 'blue',
  plastic: 'yellow',
  metal: 'yellow',
  glass: 'green',
  generic: 'black',
};
// And here is the trashBins object that contains arrays representing bins that need to be filled with corresponding trash:

const trashBins = {
  blue: [],
  yellow: [],
  green: [],
  black: [],
};

//Solution-1.
// trash.forEach(tr => {
//   if (tr.material === 'paper' && tr.dirty === false) {
//     trashBins.blue.push(tr.name);
//   } else if (
//     tr.material === 'plastic' ||
//     (tr.material === 'metal' && tr.dirty === false)
//   ) {
//     trashBins.yellow.push(tr.name);
//   } else if (tr.material === 'glass' && tr.dirty === false) {
//     trashBins.green.push(tr.name);
//   } else {
//     trashBins.black.push(tr.name);
//   }
// });

//Solution-2.
// trash.forEach(tr => {
//   //1.turnery operator
//   tr.dirty
//     ? trashBins.black.push(tr.name)
//     : trashBins[binColorMap[tr.material]].push(tr.name);
//   //2. if..else
//   // if (tr.dirty === true) {
//   //   trashBins.black.push(tr.name);
//   // } else {
//   //   trashBins[binColorMap[tr.material]].push(tr.name);
//   // }
// });

//Solution-3. Best
trash.reduce(
  (acc, val) =>
    val.dirty
      ? (acc.black.push(val.name), acc)
      : (acc[binColorMap[val.material]].push(val.name), acc),
  trashBins
);
console.log(trashBins);
