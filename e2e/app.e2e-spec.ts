import { AdvancedAngularWorkshopPage } from './app.po';

describe('advanced-angular-workshop App', () => {
  let page: AdvancedAngularWorkshopPage;

  beforeEach(() => {
    page = new AdvancedAngularWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
