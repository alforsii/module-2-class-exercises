//insert
db.posts.insert({
  title: 'Post one',
  body: 'Body of post one',
  category: 'News',
  likes: 4,
  tags: ['news', 'events'],
  user: { name: 'Jone Doe', status: 'author' },
  date: Date(),
});

//insertMany
db.posts.insertMany([
  {
    title: 'Post two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date(),
  },
  {
    title: 'Post three',
    body: 'Body of post three',
    category: 'News',
    date: Date(),
  },
  {
    title: 'Post four',
    body: 'Body of post four',
    category: 'Entertainment',
    date: Date(),
  },
]);

//db.collection.find() will get out data
