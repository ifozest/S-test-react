import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Panel from 'components/Panel';
import Loader from 'components/Loader';
import ErrorBlock from 'components/ErrorBlock';

import FilterPanelContainer from 'containers/FilterPanelContainer';
import ItemListContainer from 'containers/ItemListContainer';

import './styles.scss';

function Page({ loading, error }) {
  let errorBlock;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    errorBlock = (
      <Panel className="panel-error">
        <ErrorBlock error={error} />
      </Panel>
    );
  }
  return (
    <div className="container">
      <Panel className="panel-header">
        <Header />
      </Panel>

      {errorBlock}

      <Panel className="panel-filters">
        <FilterPanelContainer />
      </Panel>

      <Panel className="panel-vehicles">
        <ItemListContainer />
      </Panel>
    </div>
  );
}


export default Page;
