import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getCitiesList() {
    element(by.tagName('app-home')).element(by.css('.cursor-pointer')).click();
  }

  clickOnTomorrowDate(){
    element(by.id('head-1')).click();
  }
}
