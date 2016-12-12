import { BuildComponentsPage } from './app.po';

describe('build-components App', function() {
  let page: BuildComponentsPage;

  beforeEach(() => {
    page = new BuildComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
