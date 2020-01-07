// Find the most popular actor from an array
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
