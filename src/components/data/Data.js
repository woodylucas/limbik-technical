import React from 'react'
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import SpecificData from '../SpecificData'

class Data extends React.Component {
  render() {

    return (
      <div>
        <Consumer>
          {value => {
            const { data_list, heading } = value;
            // console.log(data_list)
            if(data_list === undefined || data_list.length === 0) {
              return <Spinner />
            } else {
              return (
                <React.Fragment >
                  <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {data_list.map(dataObj => (
                    <SpecificData data={dataObj} key={dataObj.id} />
                  ))}
                </div>
                </React.Fragment>
              )
            }

          }}
        </Consumer>
      </div>
    )
  }
}

export default Data;
