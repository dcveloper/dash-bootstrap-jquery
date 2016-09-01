/* 
End to End test for subscribe component
Refer to https://docs.angularjs.org/guide/e2e-testing

Run the site (npm start)
In another console window in the project folder, run e2e test (npm run e2e)
*/

describe('Home', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('Is Page Title Correct?', () => {

    let subject = browser.getTitle();
    let result  = 'Dashboards as a Service';
    expect(subject).toEqual(result);
  });

});
