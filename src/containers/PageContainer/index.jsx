import { connect } from 'react-redux';

import Page from 'components/Page';

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(Page);
