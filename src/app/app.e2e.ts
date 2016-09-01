describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <navbar>', () => {
    let navBarExists = element(by.tagName('navbar')).isPresent();
    let result  = true;
    expect(navBarExists).toEqual(result);
  });

});
