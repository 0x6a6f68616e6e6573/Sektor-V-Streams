export default ({ app }: any) => {
  app.router.beforeEach((_to: any, _from: any, next: any) => {
    app.store.commit('START_LOADING');
    next();
  });
  app.router.afterEach((_to: any, _from: any) => {
    app.store.commit('STOP_LOADING');
  });
};
