import React from 'react'
import { Consumer } from '../../context'

class Data extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {value => {
            console.log(value)
            return <h1>data</h1>
          }}
        </Consumer>
      </div>
    )
  }
}

export default Data;
