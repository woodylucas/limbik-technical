import React from 'react'
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

class Data extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {value => {
            const { data_list } = value;
            if(data_list === undefined || data_list.length === 0) {
              return <Spinner />
            } else {
              return <h1>Data Loaded</h1>
            }

          }}
        </Consumer>
      </div>
    )
  }
}

export default Data;
