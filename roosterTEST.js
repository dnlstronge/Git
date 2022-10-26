// exercise relating to test suite 

const assert = require('assert')
const Rooster = require('../index')

describe ('Rooster', () => {
  describe(.announcedawn () => {
    it ('returns a rooster call', () => {

//setup: 
const expected = 'cock-a-doodle-do'
// exercise 
const actual = Rooster.announcedawn()
// verify
assert.equal(actual, expected)
    });
  });

});