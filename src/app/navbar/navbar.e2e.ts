/* 
End to End test for subscribe component
Refer to https://docs.angularjs.org/guide/e2e-testing

Run the site (npm start)
In another console window in the project folder, run e2e test (npm run e2e)
*/

describe('NavBar', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('NavBar - Do we have correct number of menu items?', () => {
    
    const navBarElemCount = element.all(by.css('.level2')).count();
    expect(navBarElemCount).toBe(4); //should be 3, but we're temporarily adding Style Guide Menu Item
  });

});
