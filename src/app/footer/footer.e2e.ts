/* 
End to End test for subscribe component
Refer to https://docs.angularjs.org/guide/e2e-testing

Run the site (npm start)
In another console window in the project folder, run e2e test (npm run e2e)
*/

describe('Footer', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('Footer - Do we have the treasury seal?', () => {
    
    const sealIsPresent = element(by.css('.treasury-seal-footer')).isPresent();
    expect(sealIsPresent).toBe(true); 
  });

});
