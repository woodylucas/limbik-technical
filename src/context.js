import React from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'SEARCH_ID':
      return {
        ...state,
        data_list: action.payload,
        heading: 'Search Results'
      };
      default:
        return state;
  }
}

export class Provider extends React.Component {
  state = {
    data_list: [],
    heading: 'Description',
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/data`)
      .then(resp => {
        // console.log(resp.data)
        this.setState({data_list: resp.data.slice(0,10) })
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
