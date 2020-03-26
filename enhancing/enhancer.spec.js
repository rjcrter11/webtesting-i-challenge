const enhancer = require("./enhancer.js");
// test away!

// test run
it("runs test", function() {
  expect(true).toBe(true);
});

describe("enhancer", function() {
  describe(".repair()", function() {
    //a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.
    it("returns an item with durability restored to 100", function() {
      expect(
        enhancer.repair({
          name: "Sword",
          enhancement: 12,
          durability: 50
        })
      ).toEqual({
        name: "Sword",
        enhancement: 12,
        durability: 100
      });
    });
  });

  describe(".succeed()", function() {
    // a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
    it("increases enhancement by 1", function() {
      expect(
        enhancer.succeed({
          name: "Shield",
          enhancement: 12,
          durability: 50
        })
      ).toEqual({
        name: "Shield",
        enhancement: 13,
        durability: 50
      });
    });

    it("doesnt change enhancement level if enhancement is at 20", function() {
      expect(
        enhancer.succeed({
          name: "Shield",
          enhancement: 20,
          durability: 50
        })
      ).toEqual({
        name: "Shield",
        enhancement: 20,
        durability: 50
      });
    });

    it("doesnt change the durability of the item", function() {
      expect(
        enhancer.succeed({
          name: "Shield",
          enhancement: 20,
          durability: 50
        })
      ).toStrictEqual({
        name: "Shield",
        enhancement: 20,
        durability: 50
      });
    });
  });

  describe(".fail()", () => {
    // a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
    it("decreases durability by 5 if items enhancement is less than 15", function() {
      expect(
        enhancer.fail({
          name: "Arrow",
          enhancement: 14,
          durability: 50
        })
      ).toEqual({
        name: "Arrow",
        enhancement: 14,
        durability: 45
      });
    });

    it("increases durability by 10 if enhancement is 15 or more", function() {
      expect(
        enhancer.fail({
          name: "Arrow",
          enhancement: 15,
          durability: 45
        })
      ).toEqual({
        name: "Arrow",
        enhancement: 15,
        durability: 55
      });
    });

    it("decreases enhancement level  by 1 if items enhancement is greater than 16", function() {
      expect(
        enhancer.fail({
          name: "Bow",
          enhancement: 17,
          durability: 55
        })
      ).toEqual({
        name: "Bow",
        enhancement: 16,
        durability: 55
      });
    });
  });

  describe(".get()", () => {
    // a get() method for use when working on the stretch problem.
    it("does not modify name if the enhancement is 0", function() {
      expect(
        enhancer.get({
          name: "Mace",
          enhancement: 0,
          durability: 55
        })
      ).toEqual({
        name: "Mace",
        enhancement: 0,
        durability: 55
      });
    });

    it("changes name to include enhancement level w plus sign if enhancement is greater than 0", function() {
      expect(
        enhancer.get({
          name: "Mace",
          enhancement: 5,
          durability: 55
        })
      ).toEqual({
        name: "[+5] Mace",
        enhancement: 5,
        durability: 55
      });
    });
  });
});
