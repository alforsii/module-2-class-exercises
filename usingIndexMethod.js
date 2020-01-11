// Indexing Example
// Imagine we have a collection with millions of users and we ask Mongo to return the users that live in a particular city.

// Let’s look at a JavaScript simulation of a query without an index and then with an index. Let’s assume the users collection is an array of millions of user objects:

const users = [
  { id: 1, name: 'user1', city: 'Miami' },
  { id: 2, name: 'user2', city: 'Barcelona' },
  { id: 3, name: 'user3', city: 'Madrid' },
  { id: 4, name: 'user4', city: 'Barcelona' },
  { id: 5, name: 'user5', city: 'Madrid' },
  { id: 6, name: 'user6', city: 'Barcelona' },
  { id: 7, name: 'user7', city: 'Madrid' },

  // ... millions of records here ...

  { id: 80000000, name: 'patrick', city: 'Miami' },
];

//1. A simple find implementation without an index would go one by one, looking if the city of the user is the same as the one we want:

function findCityWithoutIndex(cityName) {
  const results = [];
  users.forEach(function(user) {
    if (user.city == cityName) {
      results.push(user);
    }
  });
  return results;
}

// A more efficient implementation would be to add an index that stores all the users of each city in an array.

const index = {};
function createCityIndex(users) {
  users.forEach(function(user) {
    if (!index[user.city]) {
      index[user.city] = [user.id];
    } else {
      index[user.city].push(user.id);
    }
  });
}

// Index key:   city name
// Index value: array of all users in that city
// => { miami:     [ 1, 80000000 ],
//      barcelona: [ 2, 4, 6 ],
//      madrid:    [ 3, 5, 7 ] }

function findCityWithIndex(cityName) {
  if (Object.keys(index).length == 0) {
    createCityIndex(users);
  }
  return index[cityName];
}

console.log(findCityWithIndex('Miami'));
