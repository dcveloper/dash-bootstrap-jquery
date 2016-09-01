/* 
End to End test for subscribe component
Refer to https://docs.angularjs.org/guide/e2e-testing

Run the site (npm start)
In another console window in the project folder, run e2e test (npm run e2e)
*/

describe('Subscribe e2e', () => {

  beforeEach(() => {
    browser.get('/#/subscribe');
  });

  
  it('Subscribe - Does PageTitle Exist?', () => {
    const pageTitleElem = element(by.css('.page-title'));
    expect(pageTitleElem.isPresent()).toBe(true);
  });

  it('Subscribe - Does PageTitle have proper Title', () => {
    const pageTitleText = element(by.css('.page-title')).getText();
    const expectedPageTitle  = 'Subscribe Page';

    expect(pageTitleText).toEqual(expectedPageTitle);
  });

});
