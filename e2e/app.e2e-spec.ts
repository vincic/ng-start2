import { NgStart2Page } from './app.po';

describe('ng-start2 App', function() {
  let page: NgStart2Page;

  beforeEach(() => {
    page = new NgStart2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
