import { AngularRCPage } from './app.po';

describe('angular-rc App', () => {
  let page: AngularRCPage;

  beforeEach(() => {
    page = new AngularRCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
