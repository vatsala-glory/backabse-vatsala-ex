import { AppPage } from './app.po';
import { browser, logging, element ,by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should click and redirect to details page', () => {
    page.navigateTo();
    page.getCitiesList();
    browser.wait(browser.getCurrentUrl().then((url) =>{
      expect(url).toContain('details/');
    }), 5000); 
   
  });

  it('should show other days when clicked on accordion', () => {
    page.navigateTo();
    page.getCitiesList();
    browser.wait(browser.getCurrentUrl().then((url) => {
      expect(url).toContain('details/');
    
      page.clickOnTomorrowDate();
      browser.wait(
      expect(element(by.id('collapse-1')).getAttribute('class')).toContain('collapsing')
      , 1000);
    }));
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
