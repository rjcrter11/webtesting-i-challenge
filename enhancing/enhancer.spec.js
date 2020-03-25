const enhancer = require("./enhancer.js");
// test away!
it("runs test", function() {
  expect(true).toBe(true);
});

//a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.

it.todo("returns an item with durability restored to 100");

// a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.

// success
it.todo("increases enhancement by 1");

it.todo("enhancement level isnt changed if enhancement is at 20");

it.todo("doesnt change the durability of the item");

// fail
it.todo("decreases durability by 5 if items enhancement is less than 20");

it.todo("increases durability by 10 if enhancement is 15 of more");

it.todo(
  "enhancement level decreases by 1 if items enhancement is greater than 16"
);
