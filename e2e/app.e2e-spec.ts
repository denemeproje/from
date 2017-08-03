import { FromPage } from './app.po';

describe('from App', () => {
  let page: FromPage;

  beforeEach(() => {
    page = new FromPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
