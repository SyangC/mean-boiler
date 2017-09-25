import { MeanBoilerplatePage } from './app.po';

describe('mean-boilerplate App', () => {
  let page: MeanBoilerplatePage;

  beforeEach(() => {
    page = new MeanBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
