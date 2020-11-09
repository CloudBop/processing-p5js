let p5js = 'awesome';

describe('basic test setup', () => {
  
  it('should be a string', () => {

    let p5 = typeof p5js === 'string';
  
    expect(p5).toBeTruthy();
  });

  it('should be awesome', () => {
  
    expect(p5js).toMatch(/awesome/);
  });
})


