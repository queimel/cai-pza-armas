import { CaiPzaArmasPage } from './app.po';

describe('cai-pza-armas App', () => {
  let page: CaiPzaArmasPage;

  beforeEach(() => {
    page = new CaiPzaArmasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
