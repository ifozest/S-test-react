import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from 'actions/index';
import PageContainer from 'containers/PageContainer';

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.fetchVehicles();
  }

  render() {
    return <PageContainer />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchVehicles: () => {
    dispatch(fetchData());
  },
});

export default connect(null, mapDispatchToProps)(AppContainer);
