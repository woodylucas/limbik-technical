import React from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    data_list: [],
    heading: 'Description'
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/data`)
      .then(resp => {
        // console.log(resp.data)
        this.setState({data_list: resp.data })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
