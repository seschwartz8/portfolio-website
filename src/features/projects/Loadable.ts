import withLoadable from '../../components/WithLoadable';

export default withLoadable(
  () => import(/* webpackChunkName: "projects-page" */ './index')
);
