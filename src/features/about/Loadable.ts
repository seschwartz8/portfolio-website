import withLoadable from '../../components/WithLoadable';

export default withLoadable(
  () => import(/* webpackChunkName: "about-page" */ './index')
);
