import { CollectableTimerPage } from './app.po';

describe('collectable-timer App', () => {
  let page: CollectableTimerPage;

  beforeEach(() => {
    page = new CollectableTimerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
