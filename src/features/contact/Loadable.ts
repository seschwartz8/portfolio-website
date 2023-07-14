import withLoadable from '../../components/WithLoadable';

export default withLoadable(
  () => import(/* webpackChunkName: "contact-page" */ './index')
);
