import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: '/Randix-Game/about',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const About = require('./containers/aboutContainer').About;
      const viewReducer = require('modules/view').default;
      /*  Add the reducer to the store on key 'game'  */
      injectReducer(store, { key:'view', reducer: viewReducer });
      /*  Add the reducer to the store on key 'counter'  */

      /*  Return getComponent   */
      cb(null, About);
      /* Webpack named bundle   */
    }, 'About');
  },
});
