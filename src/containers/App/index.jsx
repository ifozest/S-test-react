import React from 'react';

import Header from 'components/Header';
import Panel from 'components/Panel';
import Filter from 'components/Filter';
import ResultList from 'components/ItemList';
import Loader from 'components/Loader';
import ErrorPanel from 'components/ErrorPanel';

import * as trafficMeister from 'service/trafficMeister';
import { getOptionsFor, getFilterBy, multiFilter } from 'utils';

import {} from './styles.scss';

const propTypes = {};
const defaultProps = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        type: '',
        brand: '',
        color: '',
      },
      loading: true,
      error: '',
    };
    this.data = [];
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    trafficMeister.fetchData((err, data) => {
      const newState = {
        loading: false,
      };
      if (err) {
        newState.error = err;
      } else {
        this.data = data;
      }
      this.setState(newState);
    });
  }

  handleChange(e) {
    const {
      name,
      value,
    } = e.target;

    this.setState(({ filter }) => {
      const newFilter = filter;
      switch (name) {
        case 'type':
          newFilter.brand = '';
          newFilter.color = '';
          break;
        case 'brand':
          newFilter.color = '';
          break;
        default:
          break;
      }
      newFilter[name] = value;
      return newFilter;
    });
  }

  render() {
    let errorBlock;

    if (this.state.loading) {
      return <Loader />;
    }

    if (this.state.error) {
      errorBlock = <ErrorPanel error={this.state.error} />;
    }

    const typeFilter = getFilterBy('type', this.state.filter.type);
    const brandFilter = getFilterBy('brand', this.state.filter.brand);
    const colorFilter = getFilterBy('colors', this.state.filter.color);

    const types = getOptionsFor('type', this.data);
    const brands = getOptionsFor('brand', this.data, [typeFilter]);
    const colors = getOptionsFor('colors', this.data, [typeFilter, brandFilter]);

    const vehicles = multiFilter(this.data, [
      typeFilter,
      brandFilter,
      colorFilter,
    ]);

    return (
      <div className="container">
        <Panel className="panel-header">
          <Header />
        </Panel>

        {errorBlock}

        <Panel className="panel-filters">
          <Filter
            name="type"
            label="vehicle"
            options={types}
            value={this.state.filter.type}
            disabled={false}
            onChange={this.handleChange}
          />
          <Filter
            name="brand"
            label="brand"
            options={brands}
            value={this.state.filter.brand}
            disabled={this.state.filter.type === ''}
            onChange={this.handleChange}
          />
          <Filter
            name="color"
            label="color"
            options={colors}
            value={this.state.filter.color}
            disabled={this.state.filter.brand === ''}
            onChange={this.handleChange}
          />
        </Panel>

        <Panel className="panel-vehicles">
          <ResultList
            items={vehicles}
          />
        </Panel>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
