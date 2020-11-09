// Import our ColorIncreaser class.
import ColorIncreaser from '../examples/color-sketch.js'
//
describe('ColorIncreaser tests', function() {
  // Will hold the reference to the ColorIncreaser class
  let colorIncreaser;

  // beforeEach is a special function that is similar to the setup function in
  // p5.js.  The major difference it that this function runs before each it()
  // test you create instead of running just once before the draw loop
  // beforeEach lets you setup the objects you want to test in an easy fashion.
  beforeEach(function() {
      colorIncreaser = new ColorIncreaser();
  });

  it('should be an object', function() {

    expect(colorIncreaser).toBe('object');

  });
});